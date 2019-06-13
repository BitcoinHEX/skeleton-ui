import Vue from 'vue';
import Vuex from 'vuex';
import Contract from './contract.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    entries: {},
    stakes: {},
    hexStakes: [],
    addr: undefined,
    loading: false,
    balance: Utils.bigNumberify(0),
    xfRawPending: Utils.bigNumberify(0),
    xfRawReady: Utils.bigNumberify(0),
    entries: [],
    stakes: [],
    totalSupply: Utils.bigNumberify(0),
    circulatingSupply: Utils.bigNumberify(0),
    address: '',
    transformDays: [],
    stakes: [],
  },
  mutations: {
    setAddress(state, address){
      state.addr = address;
    },
    clear(state) {
      state.entries = {};
      state.stakes = {};
      state.hexStakes = [];

      state.balance = Utils.bigNumberify(0);
      state.xfRawPending = Utils.bigNumberify(0);
      state.xfRawReady = Utils.bigNumberify(0);
      state.entries.splice(0);
      state.stakes.splice(0);
      state.events.splice(0);
      state.txns.splice(0);
      state.totalSupply = Utils.bigNumberify(0);
      state.circulatingSupply = Utils.bigNumberify(0);
    },
    updateGlobalStats(state, payload){
      state.totalSupply = payload.totalSupply;
      state.circulatingSupply = payload.circulatingSupply;
    },
    lobbyJoined(state, entry){
      state.entries.push(entry);
      state.xfRawPending = state.xfRawPending.add(entry.rawAmount);
    },
    lobbyLeft(state, rawAmount){
      state.xfRawPending = state.xfRawPending.sub(rawAmount);
    },
    stakeStarted(state, st){
      state.stakes.push(st);
    },
    stakeEnded(state, st){
      const lastInd = state.stakes.length - 1;
      if (st.stakeInd !== lastInd) {
        const movedStake = state.stakes[lastInd];

        movedStake.stakeInd = st.stakeInd;
        state.stakes[st.stakeInd] = movedStake;
      }
      state.stakes.pop();
    },
    updateXfRawReady(state, amt){
      state.xfRawReady = amt; // might not trigger update?
    },
    received(state, value){
      state.balance = state.balance.add(value);
    },
    sent(state, value){
      state.balance = state.balance.sub(value);
    },
    loading(state, b){
      state.loading = b; // might not trigger update?
    }
  },
  actions: {
    setAccount: ({ commit, state }, addr) => {
      if (addr !== state.addr) {
        commit('setAddress', addr).then(() => commit('clear'))
          .then(() => commit('load'));
      }
    },
    updateGlobalStats({ commit }, globalStats){
      commit('updateGlobalStats', globalStats);
    },
    lobbyJoined({ commit }, entry){
      commit('lobbyJoined', entry);
    },
    lobbyLeft({ commit }, entry){
      commit('lobbyLeft', entry.rawAmount);
    },
    stakeStarted({ commit }, st){
      commit('stakeStarted', st);
    },
    stakeEnded({ commit }, st){
      commit('stakeEnded', st);
    },
    updateXfRawReady({ commit, state }, day){
      const amt = state.entries.reduce((r, entry) => {
        if (entry.xfAmount === undefined && day > entry.joinDay) {
          return r.add(entry.rawAmount);
        }
        return r;
      }, Utils.bigNumberify(0));
      commit('updateXfRawReady', amt);
    },
    received({ commit }, value){
      commit('received', value);
    },
    sent({ commit }, value){
      commit('sent', value);
    },
    loading({ commit }, b){
      commit('loading', b);
    }
  }
});

export default store;
