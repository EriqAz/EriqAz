const tokenKey = 'hm-84-token'
const history = 'hm-84-history'
// 设置 token
export const setToken = (token) => localStorage.setItem(tokenKey, JSON.stringify(token))

// 获取 token
export const getToken = () => JSON.parse(localStorage.getItem(tokenKey))

// 移除 token
export const removeToken = () => localStorage.removeItem(tokenKey)

// 存入历史记录
export const setHistory = (value) => localStorage.setItem(history, JSON.stringify(value))

// 获取历史记录
export const getHistory = () => JSON.parse(localStorage.getItem(history)) || []
