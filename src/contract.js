const CONTRACT_START_BLOCK = 0;
const MIN_AUTO_STAKE_DAYS = 350;
const XF_LOBBY_ENTRY_INDEX_SIZE = 40;
const XF_LOBBY_ENTRY_INDEX_MASK = (1 << XF_LOBBY_ENTRY_INDEX_SIZE) // eslint-disable-line no-bitwise
  - 1;


// Declared outside class scope as shortcut - bound at construction
let Utils;
let Events;

class Wallet {
  constructor(accountAddr, hexClient, store) {
    this.accountAddr = accountAddr;
    this.updatingGlobalStats = false;
    this.addrTopic = Utils.hexZeroPad(accountAddr.toLowerCase(), 32);
    this.errorTimer; // eslint-disable-line no-unused-expressions
    this.eventBatchTimer; // eslint-disable-line no-unused-expressions
    this.queuedEvents = [];

    this.events; // eslint-disable-line no-unused-expressions
    this.txns; // eslint-disable-line no-unused-expressions

    this.entries = {}; // local lookup for lobby entries to de-dupe
    this.stakes = {}; // local lookup for lobby entries to de-dupe
    this.store = store;
    this.client = hexClient;
    Utils = hexClient.utils;
    Events = hexClient.events;

    // this.walletState = this.initWalletState(accountAddr);
  }

  setAccountAddress(addr) {
    this.accountAddr = addr;
    this.addrTopic = Utils.hexZeroPad(addr.toLowerCase(), 32);
    this.store.dispatch('setAccount', addr);
  }

  clear() {
    this.events = {};
    this.txns = {};
    this.queuedEvents = [];
    this.updatingGlobalStats = false;
    clearTimeout(this.errorTimer);
    clearTimeout(this.eventBatchTimer);
  }

  handleError() {
    clearTimeout(this.errorTimer);
    this.errorTimer = setTimeout(this.load, 2000);
  }

  updateXfRawReady() {
    const currentDay = Utils.getDayFromTimestamp(Utils.getNowTimestamp());
    this.store.dispatch('updateXfRawReady', currentDay);
  }

  async updateGlobalStats() {
    if (!this.updatingGlobalStats) {
      try {
        this.updatingGlobalStats = true;

        const info = await this.client.dispatch.callConstant('getGlobalInfo', []);
        const totalSupply = info[10]; // eslint-disable-line prefer-destructuring
        const contractBalance = info[11];
        const circulatingSupply = totalSupply.sub(contractBalance);
        this.store.dispatch('updateGlobalStats', { totalSupply, circulatingSupply });

        this.updatingGlobalStats = false;
      } catch (err) {
        this.updatingGlobalStats = false;

        console.error('EXCEPTION: updateGlobalStats: getGlobalInfo', err);
        this.handleError();
      }
    }
  }

  lobbyJoined(evt) {
    let entry = this.entries[evt.entryId];
    if (!entry) {
      entry = {
        entryId: evt.entryId,
        joinDay: evt.joinDay,
        entryIndex: evt.entryIndex,
        rawAmount: evt.amount,
        xfAmount: undefined,
        referrer: evt.referrer,
        joinEvt: evt,
        leaveEvt: undefined,
      };
      this.entries[evt.entryId] = entry;
      this.store.dispatch('lobbyJoined', entry);
    }
  }

  lobbyLeft(evt) {
    const entry = this.entries[evt.entryId];
    if (entry) {
      entry.xfAmount = evt.amount;
      entry.leaveEvt = evt;
      this.store.dispatch('lobbyLeft', entry);
    }
  }

  stakeStarted(day, a, evt) {
    let st = this.stakes[a.stakeId];
    if (!st) {
      st = {
        stakeId: a.stakeId,
        stakeInd: this.hexStakes.length,
        amount: a.stakedHearts,
        duration: evt.duration,
        startDay: day,
        completesOnDay: day + 1 + evt.duration,
        pooledDay: day + 1,
        unpooledDay: undefined,
        endDay: undefined,
        stakeReturn: undefined,
        payout: undefined,
        penalty: undefined,
        servedDays: undefined,
        startEvt: evt,
        goodEvt: undefined,
        endEvt: undefined,
      };
      this.stakes[a.stakeId] = st;
      this.hexStakes.push(st);
      this.store.dispatch('stakeStarted', st);
    }
  }

  stakeEnded(day, a, evt) {
    const st = this.stakes[a.stakeId];
    if (st) {
      if (a.servedDays === undefined) {
        st.goodEvt = evt;
      } else {
        st.endEvt = evt;
      }
      if (st.unpooledDay) {
        st.endDay = day;
        return;
      }
      if (day === st.startDay) {
        st.pooledDay = null;
        st.unpooledDay = null;
        st.servedDays = 0;
      } else {
        st.unpooledDay = day;
        if (a.servedDays === undefined) {
          st.servedDays = st.duration;
        } else {
          st.endDay = day;
          st.servedDays = a.servedDays;
        }
      }
      st.payout = a.payout;
      st.penalty = a.penalty;

      st.stakeReturn = st.amount.add(a.payout);
      if (st.stakeReturn.lte(st.penalty)) {
        st.stakeReturn = Utils.bigNumberify(0);
      } else {
        st.stakeReturn = st.stakeReturn.sub(st.penalty);
      }
      this.store.dispatch('stakeEnded', st);
      delete st.stakeInd; // huh?
    }
  }

  getTx(e, txTimestamps) {
    let tx = this.txns[e.txId];
    if (!tx) {
      tx = {
        txId: e.txId,
        txHash: e.transactionHash,
        timestamp: txTimestamps[e.txId],
        blockNum: e.blockNumber,
      };
      this.txns[e.txId] = tx;
    }
    return tx;
  }

  addEvent(e, tx) {
    if (!this.events[e.evtId]) {
      const hexEvents = this.client.interface.events;
      const day = Utils.getDayFromTimestamp(tx.timestamp);
      let {
        evt, a, user, referrer, sender, isReferral, isAssist, // eslint-disable-line prefer-const
      } = Events.commonFields(e, tx, this.accountAddr);

      switch (e.topics[0]) {
        case hexEvents.Transfer.topic:
          if (a.to === this.accountAddr) {
            evt = {
              ...evt,
              name: 'Receive',
              other: Utils.getOptionalAddr(a.from),
              amount: a.value,
            };
            this.store.dispatch('received', a.value);
          } else {
            evt = {
              ...evt,
              name: 'Send',
              other: Utils.getOptionalAddr(a.to),
              amount: a.value,
            };
            this.store.dispatch('sent', a.value);
          }
          break;

        case hexEvents.JoinXfLobby.topic: {
          const entryId = a.entryId.toNumber();
          evt = {
            ...evt,
            name: isReferral ? 'JoinXfLobbyReferral' : 'JoinXfLobby',
            entryId,
            joinDay: entryId >> XF_LOBBY_ENTRY_INDEX_SIZE, // eslint-disable-line no-bitwise
            entryIndex: entryId & XF_LOBBY_ENTRY_INDEX_MASK, // eslint-disable-line no-bitwise
            amount: a.rawAmount,
            user,
            referrer,
          };
          this.lobbyJoined(evt);
          break;
        }

        case hexEvents.LeaveXfLobby.topic: {
          const entryId = a.entryId.toNumber();
          evt = {
            ...evt,
            name: isReferral ? 'LeaveXfLobbyReferral' : 'LeaveXfLobby',
            entryId,
            joinDay: entryId >> XF_LOBBY_ENTRY_INDEX_SIZE, // eslint-disable-line no-bitwise
            entryIndex: entryId & XF_LOBBY_ENTRY_INDEX_MASK, // eslint-disable-line no-bitwise
            amount: a.xfAmount,
            user,
            referrer,
          };
          this.lobbyLeft(evt);
          break;
        }

        case hexEvents.DailyDataUpdate.topic:
          evt = {
            ...evt,
            name: 'DataUpdate',
            addedDays: a.daysStoredAdded,
            totalDays: a.daysStoredTotal,
          };
          break;

        case hexEvents.Claim.topic:
        case hexEvents.ClaimAssist.topic:
          evt = {
            ...evt,
            name: isAssist ? 'ClaimAssist' : (isReferral // eslint-disable-line no-nested-ternary
              ? 'ClaimReferral' : 'Claim'),
            claimToAddr: a.claimToAddr,
            btcAddr: a.btcAddr,
            rawSatoshis: a.rawSatoshis,
            adjSatoshis: a.adjSatoshis,
            claimedHearts: a.claimedHearts,
            referrer,
            sender,
          };
          break;

        case hexEvents.StartStake.topic:
          evt = {
            ...evt,
            name: 'StakeStart',
            stakeId: a.stakeId,
            amount: a.stakedHearts,
            duration: a.stakedDays,
            isAutoStake: a.isAutoStake,
          };
          this.stakeStarted(day, a, evt);
          break;

        case hexEvents.GoodAccounting.topic:
          evt = {
            ...evt,
            name: isAssist ? 'StakeGoodAccountingAssist' : 'StakeGoodAccounting',
            stakeId: a.stakeId,
            payout: a.payout,
            penalty: a.penalty,
            user,
            sender,
          };
          this.stakeEnded(day, a, evt);
          break;

        case hexEvents.EndStake.topic:
          evt = {
            ...evt,
            name: 'StakeEnd',
            stakeId: a.stakeId,
            payout: a.payout,
            penalty: a.penalty,
            servedDays: a.servedDays,
          };
          this.stakeEnded(day, a, evt);
          break;

        default:
          return;
      }
      this.events[e.evtId] = evt;
    }
  }

  async processQueuedEvents() {
    try {
      const q = this.queuedEvents;
      const n = q.length;

      clearTimeout(this.eventBatchTimer);
      this.eventBatchTimer = undefined;
      if (n) {
        this.queuedEvents = [];

        const txTimestamps = {};
        const promises = [];

        Array(n).forEach((i) => {
          const e = q[i];

          if (!txTimestamps[e.txId]) {
            const { timestamp } = e.args;
            if (timestamp === undefined) {
              promises.push(Events.getTxTimestamp(e)
                .then(ts => txTimestamps[e.txId] = ts)); // eslint-disable-line no-return-assign
            } else {
              txTimestamps[e.txId] = timestamp;
            }
          }
        });
        await Promise.all(promises);

        Array(n).forEach((i) => {
          const e = q[i];
          const tx = this.getTx(e, txTimestamps);
          this.addEvent(e, tx);
        });
      }
      this.updateXfRawReady();
      this.updateGlobalStats();
      return true;
    } catch (err) {
      console.error('EXCEPTION: processQueuedEvents', err);
      this.handleError();
    }
    return false;
  }

  async processAllLogs(logs) {
    const n = logs.length;
    if (n) {
      Array(n).forEach((i) => {
        let e = logs[i];
        e = Events.addTxEvtId(e);
        e.args = Events.parseLogForValues(e);
      });
      logs.sort((a, b) => a.evtId - b.evtId);
      this.queuedEvents = [...this.queuedEvents, ...logs];

      if (await this.processQueuedEvents()) {
        this.provider.resetEventsBlock(logs[n - 1].blockNumber + 1);
      }
    } else {
      this.provider.resetEventsBlock(CONTRACT_START_BLOCK);
    }
  }

  async eventBatcher(e) {
    if (e.topics[1] === this.addrTopic || e.topics[2] === this.addrTopic
      || e.topics[3] === this.addrTopic) {
      e = Events.addTxEvtId(e); // eslint-disable-line no-param-reassign
      this.queuedEvents.push(e);
    }
    clearTimeout(this.eventBatchTimer);
    this.eventBatchTimer = setTimeout(this.processQueuedEvents, 100);
  }

  async load() {
    this.store.dispatch('loading', true);

    clearTimeout(this.errorTimer);
    this.errorTimer = undefined;
    Events.removeContractEventListeners();

    try {
      const logs = await Events.getAllLogs(this.addrTopic, CONTRACT_START_BLOCK);

      this.clear();

      await this.processAllLogs(logs);

      Events.addContractEventListeners(this.eventBatcher, this.handleError);

      this.store.dispatch('loading', false);
    } catch (err) {
      console.error('EXCEPTION: load', err);
      this.handleError();
    }
  }

  send(toAddr, amount) {
    return this.client.transfer(toAddr, amount);
  }

  join(rawAmount, referrer) {
    return this.client.joinXfLobby(
      referrer,
      {
        value: rawAmount,
      },
    );
  }

  leave(joinDay, count) {
    return this.client.leaveXfLobby(
      joinDay,
      count || 0,
    );
  }

  // Actually async because it does callConstant rather than getting a proxy object
  async canClaim(utxo) {
    return !utxo.claimed && this.client.dispatch.callConstant('canClaimBtcAddress', [utxo.btcAddress.asHash(),
      utxo.satoshis,
      utxo.proof]);
  }

  claim(utxo, statement, viaEthAddr, autoStakeDays, referrer) {
    const { rawPubKey, signature } = statement;
    return this.client.claimBtcAddress(
      utxo.satoshis,
      utxo.proof,
      statement.claimToEthAddr,
      rawPubKey.subarray(0, 32),
      rawPubKey.subarray(32, 64),
      statement.addrType,
      signature.v,
      signature.r,
      signature.s,
      autoStakeDays || MIN_AUTO_STAKE_DAYS,
      referrer,
    );
  }

  startStake(newStakedHearts, newStakedDays) {
    return this.client.startStake(newStakedHearts, newStakedDays);
  }

  endStake(st) {
    return this.client.endStake(st.stakeInd, st.stakeId);
  }
}

export default Wallet;