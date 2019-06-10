import Vue from 'vue';
import Vuex from 'vuex';
import utils from './utils';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    address: '',
    transformDays: [],
    stakes: [],
  },
  mutations: {

  },
  actions: {
    updateState(context) {
      // Fetch updates through utils
    },
  },
});

function updateState() {
  store.dispatch('updateState');
}

utils.dispatch.subscribe('block', updateState);

export default store;
