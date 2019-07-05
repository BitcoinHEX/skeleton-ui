import Vue from 'vue';
import Vuex from 'vuex';
import contract from './contract';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    address: '',
    balance: 0,
    stakes: [],
    transformDays: [],
  },
  mutations: {
    balance(state, amt){
      state.balance = amt;
    },
    stakes(state, sts){
      state.stakes = sts;
    },
    addLobby(state, {day, lobbyEntry}){
      if(!state.transformDays[day]){
        state.transformDays[day] = [];
      }
      state.transformDays[day].push(lobbyEntry);
    }

  },
  actions: {
    balance({commit}, amt){
      commit('balance', amt);
    },
    stakes({commit}, sts){
      commit('stakes', sts);
    },
    addLobby: ({ commit, state }, {day, xfLobby}) => {
      commit('addLobby', {day, lobbyEntry: xfLobby});
    }
  }
});

contract(store);

export default store;
