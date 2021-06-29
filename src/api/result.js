import request from '@/utils/request'

/**
 * 获取搜索结果
 * @param {*} keyword 关键词
 * @param {*} page 页数
 * @param {*} num 每页数量
 * @returns
 */
export const reqResult = (keyword, page = 1, num = 10) => request({
  method: 'get',
  url: '/v1_0/search',
  params: {
    q: keyword,
    page,
    per_page: num
  }
})

/**
 * 获取文章详情
 * @param {*} id 文章id
 * @returns
 */
export const reqDetaile = (id) => request({
  method: 'get',
  url: '/v1_0/articles/' + id
})
