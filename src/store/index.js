import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user'
import channels from '@/store/modules/channels'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    channels
  }
})
