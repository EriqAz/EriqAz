import { getToken, setToken } from '@/utils/storage'

const state = {
  tokenInfo: getToken() || {}
}
const mutations = {
  setTokenInfo(state, token) {
    state.tokenInfo = token
    setToken(token)
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
