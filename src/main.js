import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import '@/utils/vant-ui'
import '@/styles/index.scss'
import request from '@/utils/request'
Vue.prototype.$request = request
import { formateTime } from '@/utils/formateTime'
Vue.filter('formateTime', formateTime)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
