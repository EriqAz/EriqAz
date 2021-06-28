import { reqAllChannels, reqChannels } from '@/api/channels'
const state = {
  channels: [],
  allChannels: []
}
const mutations = {
  setChannels(state, Channels) {
    state.channels = Channels
  },
  setAllChannels(state, allChannels) {
    state.allChannels = allChannels
  },
  addChannels(state, channel) {
    state.channels.push(channel)
  }
}
const actions = {
  async getChannels(context) {
    const res = await reqChannels()
    context.commit('setChannels', res.data.channels)
  },
  async getAllChannels(context) {
    const { data: { channels }} = await reqAllChannels()
    context.commit('setAllChannels', channels)
  }
}
const getters = {
  optionalChannels: (state) => {
    const res = state.allChannels.filter(item => {
      const index = state.channels.findIndex(channel => channel.id === item.id)
      return index === -1
    })
    return res
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
