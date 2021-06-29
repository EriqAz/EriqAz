import request from '@/utils/request'

/**
 * 获取搜索联想
 * @param {*} q
 * @returns
 */
export const reqSuggestions = (q) => request({
  method: 'get',
  url: '/v1_0/suggestion',
  params: {
    q
  }
})
