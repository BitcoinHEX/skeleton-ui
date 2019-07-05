import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    address: '',
    balance: 0,
    stakes: [],
    transformDays: [],
  },
  mutations: {
    updateAddress(state, addr){
      state.address = addr;
    },
    updateBalance(state, amt){
      state.balance = amt;
    },
    updateStakes(state, sts){
      state.stakes = sts;
    },
    updateTransformDays(state, days){
      state.transformDays = days;
    }

  },
  actions: {
    updateAddress({commit}, addr){
      commit('updateAddress', addr);
    },
    updateBalance({commit}, amt){
      commit('updateBalance', amt);
    },
    updateStakes({commit}, sts){
      commit('updateStakes', sts);
    },
    updateTransformDays({ commit }, days) {
      commit('updateTransformDays', days);
    }
  }
});

export default store;
