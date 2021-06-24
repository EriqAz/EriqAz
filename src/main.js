import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import '@/styles/index.scss'
import request from '@/utils/request'
Vue.prototype.$request = request
import { Button, NavBar, Field, CellGroup, Toast, Overlay, Icon, Tabbar, TabbarItem, Tab, Tabs, Search } from 'vant'
Vue.use(Button)
Vue.use(NavBar)
Vue.use(Field)
Vue.use(CellGroup)
Vue.use(Toast)
Vue.use(Overlay)
Vue.use(Icon)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Search)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
