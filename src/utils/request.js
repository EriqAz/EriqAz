import axios from 'axios'
import store from '@/store'
import { reqRefreshToken } from '@/api/user'
import router from '@/router'
const request = axios.create({
  baseURL: 'http://192.168.134.31:8000'
})

// 请求拦截器
request.interceptors.request.use(config => {
  const token = store.state.user.tokenInfo.token
  if (token && !config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(response => {
  return response.data
}, async(error) => {
  if (error.response.status === 401) {
    const refreshToken = store.state.user.tokenInfo.refresh_token
    if (refreshToken) {
      try {
        const { data } = await reqRefreshToken(refreshToken)
        store.commit('user/setTokenInfo', {
          token: data.token,
          refresh_token: refreshToken
        })
        error.config.headers.Authorization = `Bearer ${data.token}`
        return request(error.config)
      } catch {
        store.commit('user/removeTokenInfo')
        router.push({
          path: '/login',
          query: {
            backto: router.currentRoute.fullPath
          }
        })
      }
    } else {
      store.commit('user/removeTokenInfo')
      router.push({
        path: '/login',
        query: {
          backto: router.currentRoute.fullPath
        }
      })
    }
  }

  return Promise.reject(error)
})

export default request
