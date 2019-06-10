import Vue from 'vue';
import Vuex from 'vuex';
import Utils from 'hex-wallet-utils/Utils';

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
    events: [],
    txns: [],
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
    load(state, )
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
      this.walletState.xfRawPending = this.walletState.xfRawPending.add(entry.rawAmount);
    }
  }
});

function updateState() {
  store.dispatch('updateState');
}

utils.dispatch.subscribe('block', updateState);

export default store;
