import Vue from 'vue'
import axios from 'axios'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(Buefy);
Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://5e1848adeaa1d2001436e1f0.mockapi.io/users';


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
