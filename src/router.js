import Vue from 'vue';
import Router from 'vue-router';
import Claim from './views/Claim.vue';
import Wallet from './views/Wallet.vue';
import Stake from './views/Stake.vue';
import Transform from './views/Transform.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'receive',
      component: Wallet,
    },
    {
      path: '/claim',
      name: 'claim',
      component: Claim,
    },
    {
      path: '/stake',
      name: 'stake',
      component: Stake,
    },
    {
      path: '/transform',
      name: 'transform',
      component: Transform,
    },
  ],
});
