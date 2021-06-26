import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import '@/utils/vant-ui'
import '@/styles/index.scss'
import request from '@/utils/request'
import eventBus from '@/utils/eventBus'
Vue.prototype.$request = request
Vue.prototype.$eventBus = eventBus
import { formateTime } from '@/utils/formateTime'
Vue.filter('formateTime', formateTime)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
