import request from '@/utils/request'
/**
 * 获取所有频道
 * @returns
 */
export const reqAllChannels = () => request.get('/v1_0/channels')

/**
 * 获取文章列表
 * @param {*} channel_id 文章id
 * @param {*} timestamp 时间戳
 * @returns
 */
export const reqArticle = (channel_id, timestamp) => request({
  method: 'get',
  url: '/v1_0/articles',
  params: {
    channel_id,
    timestamp
  }
})
/**
 * 获取用户频道
 * @returns
 */
export const reqChannels = () => request({
  method: 'get',
  url: '/v1_0/user/channels'
})

export const reqNewChannels = (channels) => request({
  method: 'put',
  url: '/v1_0/user/channels',
  data: {
    channels
  }
})
