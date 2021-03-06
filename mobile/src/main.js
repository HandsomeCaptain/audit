import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'vant/lib/icon/local.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import plus from 'vue-h5-plus'

Vue.config.productionTip = false;
Vue.use(Vant);
Vue.use(VueAxios, axios);
Vue.use(plus)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
