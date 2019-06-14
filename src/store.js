import Vue from 'vue';
import Vuex from 'vuex';
import ethers from 'ethers';

window.ethers = ethers;

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    address: '',
    balance: 0,
    stakes: [],
    transformDays: [],
  },
  mutations: {

  },
  actions: {

  }
});

export default store;
