import { reqAllChannels } from '@/api/channels'
const state = {
  channels: []
}
const mutations = {
  setChannels(state, allChannel) {
    state.channels = allChannel
  }
}
const actions = {
  async getAllChannel(context) {
    const res = await reqAllChannels()
    context.commit('setChannels', res.data.channels)
  }
}
const getters = {

}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
