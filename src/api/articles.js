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

/**
 * 文章点赞
 * @param {*} id 文章id
 * @returns
 */
export const getAttitude = (id) => request({
  method: 'post',
  url: '/v1_0/article/likings',
  data: {
    target: id
  }
})

/**
 * 取消文章点赞
 * @param {*} id 文章id
 * @returns
 */
export const getUnAttitude = (id) => request({
  method: 'delete',
  url: `/v1_0/article/likings/${id}`
})

/**
 * 取消文章不喜欢
 * @param {*} id 文章id
 * @returns
 */
export const getLike = (id) => request({
  method: 'delete',
  url: `/v1_0/article/dislikes/${id}`
})

/**
 * 对文章不喜欢
 * @param {*} id 文章id
 * @returns
 */
export const getDisLike = (id) => request({
  method: 'post',
  url: '/v1_0/article/dislikes',
  data: {
    target: id
  }
})

/**
 * 获取文章评论
 * @param {*} id 文章id
 * @param {*} lastId 最后一条评论id
 * @param {*} limit 一次加载多少评论
 * @returns
 */
export const getComment = (id, lastId, limit = 10) => request({
  method: 'get',
  url: '/v1_0/comments',
  params: {
    type: 'a',
    source: id,
    offset: lastId,
    limit
  }
})
