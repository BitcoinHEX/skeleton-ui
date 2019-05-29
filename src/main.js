import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bulma/css/bulma.css';
import '@mdi/font/css/materialdesignicons.css';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
