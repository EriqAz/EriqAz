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

/**
 * 发表文章评论
 * @param {*} id 文章id
 * @param {*} content 回复内容
 * @returns
 */
export const reqAddComment = (id, content) => request({
  method: 'post',
  url: '/v1_0/comments',
  data: {
    target: id,
    content: content
  }
})

/**
 * 获取评论的回复
 * @param {*} id 评论id
 * @param {*} offset 最后一条回复id
 * @param {*} limit 每页条数
 * @returns
 */
export const reqCommentReply = (id, offset, limit = 10) => request({
  method: 'get',
  url: '/v1_0/comments',
  params: {
    type: 'c',
    source: id,
    offset,
    limit
  }
})

/**
 * 添加回复
 * @param {*} commentId 评论id
 * @param {*} content 评论内容
 * @param {*} id 文章id
 * @returns
 */
export const addReply = (commentId, content, id) => request({
  method: 'post',
  url: '/v1_0/comments',
  data: {
    target: commentId,
    content,
    art_id: id
  }
})

/**
 * 评论点赞
 * @param {*} id 评论id
 * @returns
 */
export const addIsLike = (id) => request({
  method: 'post',
  url: '/v1_0/comment/likings',
  data: {
    target: id
  }
})

/**
 * 取消评论点赞
 * @param {*} id 评论id
 * @returns
 */
export const cancelLike = (id) => request({
  method: 'delete',
  url: `/v1_0/comment/likings/${id}`
})
