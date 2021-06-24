const tokenKey = 'hm-84-token'
// 设置 token
export const setToken = (token) => localStorage.setItem(tokenKey, JSON.stringify(token))

// 获取 token
export const getToken = () => JSON.parse(localStorage.getItem(tokenKey))
