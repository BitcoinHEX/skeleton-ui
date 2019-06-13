import Vue from 'vue';
import Vuex from 'vuex';
import ethers from 'ethers';
import Contract from './contract';

window.ethers = ethers;

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    address: '',
    balance: 0,
  },
  mutations: {

  },
  actions: {

  }
});

export default store;
