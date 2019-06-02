import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import Wallet from '@/views/Wallet.vue';
import Claim from '@/views/Claim.vue';
import Stake from '@/views/Stake.vue';
import Transform from '@/views/Transform.vue';
import Stats from '@/views/Stats.vue';
import Refer from '@/views/Refer.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/wallet',
      name: 'wallet',
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
    {
      path: '/stats',
      name: 'stats',
      component: Stats,
    },
    {
      path: '/refer',
      name: 'refer',
      component: Refer,
    },
  ],
});
