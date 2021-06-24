import axios from 'axios'
import store from '@/store'
const request = axios.create({
  baseURL: 'http://192.168.134.38:8000'
})

// 请求拦截器
request.interceptors.request.use(config => {
  const token = store.state.user.tokenInfo.token
  config.headers.Authorization = `Bearer ${token}`
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(response => {
  return response.data
}, (error) => {
  return Promise.reject(error)
})

export default request
