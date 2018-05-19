import 'material-icons/iconfont/material-icons.css';
import 'vuetify/dist/vuetify.min.css';

import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

Vue.use(Vuetify);

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
