import { getToken, setToken, removeToken } from '@/utils/storage'

const state = {
  tokenInfo: getToken() || {}
}
const mutations = {
  setTokenInfo(state, token) {
    state.tokenInfo = token
    setToken(token)
  },
  removeTokenInfo(state) {
    state.tokenInfo = ''
    removeToken()
  }
}
const actions = {}
const getters = {}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
