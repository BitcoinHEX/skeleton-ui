import Vue from 'vue';
import Vuex from 'vuex';
import hexWalletUtils from 'hex-wallet-utils';

Vue.use(Vuex);

function updateState() {
  // Do Updates
}

hexWalletUtils.subscribe('block', updateState);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
});
