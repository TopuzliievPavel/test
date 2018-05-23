
import Vue from 'vue'
import VueFire from 'vuefire'
import VueAgile from 'vue-agile'
import wysiwyg from "vue-wysiwyg"
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


Vue.config.productionTip = false;

Vue.prototype.$http = axios;
Vue.use(VueFire);
Vue.use(VueAgile);
Vue.use(wysiwyg, {});


import './components/global'

import './directives'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
