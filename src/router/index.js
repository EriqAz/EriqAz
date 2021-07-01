import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Login from '@/views/login'
import Layout from '@/views/layout'
import Home from '@/views/home'
import Question from '@/views/question'
import Video from '@/views/video'
import User from '@/views/user'
import Search from '@/views/search'
import Result from '@/views/search/result.vue'
import Detail from '@/views/search/detail.vue'
import Profile from '@/views/user/profile.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/', component: Layout, children: [
      { path: '', component: Home },
      { path: 'question', component: Question },
      { path: 'video', component: Video },
      { path: 'user', component: User }
    ] },
    { path: '/search', component: Search },
    { path: '/result', component: Result },
    { path: '/detail/:id', component: Detail },
    { path: '/profile', component: Profile }
  ]
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const AuthUrl = ['/user']
router.beforeEach((to, from, next) => {
  const token = store.state.user.tokenInfo.token
  if (to.path === '/login' && token) {
    next('/')
    return
  }
  if (AuthUrl.includes(to.path)) {
    if (token) {
      next()
    } else {
      router.push({
        path: '/login',
        query: {
          backto: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})
export default router
