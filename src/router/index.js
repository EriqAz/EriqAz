import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import store from '@/store'
const Login = () => import('@/views/login')
const Layout = () => import('@/views/layout')
const Home = () => import('@/views/home')
const Question = () => import('@/views/question')
const Video = () => import('@/views/video')
const User = () => import('@/views/user')
const Search = () => import('@/views/search')
const Result = () => import('@/views/search/result.vue')
const Detail = () => import('@/views/search/detail.vue')
const Profile = () => import('@/views/user/profile.vue')
const Chat = () => import('@/views/user/chat.vue')

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/', component: Layout, children: [
      { path: '', component: Home, meta: { isKeepLive: true }},
      { path: 'question', component: Question },
      { path: 'video', component: Video },
      { path: 'user', component: User }
    ] },
    { path: '/search', component: Search },
    { path: '/result', component: Result },
    { path: '/detail/:id', component: Detail },
    { path: '/profile', component: Profile },
    { path: '/chat', component: Chat }
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
