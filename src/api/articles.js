import request from '@/utils/request'
/**
 * 不感兴趣
 * @param {*} articleId 文章id
 * @returns
 */
export const reqDisLike = articleId => request({
  method: 'post',
  url: '/v1_0/article/dislikes',
  data: {
    target: articleId
  }
})
/**
 * 举报文章
 * @param {*} articleId 文章id
 * @param {*} type 举报类型
 * @returns
 */
export const reqReport = (articleId, type) => request({
  method: 'post',
  url: '/v1_0/article/reports',
  data: {
    target: articleId,
    type
  }
})
