import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/layout'
import Home from '@/views/home'
import Question from '@/views/question'
import Video from '@/views/video'
import User from '@/views/user'
import Search from '@/views/search'
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
    { path: '/search', component: Search }
  ]
})

export default router
