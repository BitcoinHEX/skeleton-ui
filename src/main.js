import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';

import App from './App.vue';
import router from './router';
import store from './store';
import Contract from './contract';

import 'bulma/css/bulma.css';
import '@mdi/font/css/materialdesignicons.css';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false;
Vue.use(VueClipboard);

/* Assuiming the user is using Metamask for now, add support for other wallets later */

if (window.ethereum) {
  window.ethereum.enable().then(() => {
    const contract = new Contract(store);

    new Vue({
      router,
      store,
      contract,
      render: h => h(App),
    }).$mount('#app');

    window.ethereum.on('accountsChanged', () => {
      window.location.reload();
    });

    window.ethereum.on('networkChanged', () => {
      window.location.reload();
    });
  });
} else {
  alert('No Metamask Detected'); // eslint-disable-line no-alert
}
