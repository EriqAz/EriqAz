import request from '@/utils/request'
/**
 * 发送验证码
 * @param {*} mobile 手机号
 * @returns
 */
export const reqSendCode = mobile => request.get(`/v1_0/sms/codes/${mobile}`)

/**
 * 登录
 * @param {*} mobile 电话号
 * @param {*} code 验证码
 * @returns
 */
export const reqLogin = (mobile, code) => request.post('/v1_0/authorizations', {
  mobile,
  code
})
/**
 * 获取用户信息
 * @returns
 */
export const getUserIfno = () => request({
  method: 'get',
  url: '/v1_0/user/profile'
})

/**
 * 关注作者
 * @param {*} id 作者id
 * @returns
 */
export const getFollow = (id) => request({
  method: 'post',
  url: '/v1_0/user/followings',
  data: {
    target: id
  }
})

/**
 * 取消关注
 * @param {*} id 作者id
 * @returns
 */
export const getUnFollow = (id) => request({
  method: 'delete',
  url: '/v1_0/user/followings/' + id
})

/**
 * 刷新token
 * @param {*} refreshToken refresh_token
 * @returns
 */
export const reqRefreshToken = (refreshToken) => request({
  method: 'put',
  url: '/v1_0/authorizations',
  headers: {
    Authorization: `Bearer ${refreshToken}`
  }
})

/**
 *  获取用户自己信息
 * @returns
 */
export const reqUserInfo = () => request({
  method: 'get',
  url: '/v1_0/user'
})

/**
 * 修改个人信息
 * @param {*} obj 修改内容
 * @returns
 */
export const userinfo = (obj) => request({
  method: 'patch',
  url: '/v1_0/user/profile',
  data: obj
})

/**
 * 更换头像
 * @param {*} fd 图片
 * @returns
 */
export const updatePhoto = (fd) => {
  return request({
    method: 'patch',
    url: '/v1_0/user/photo',
    data: fd
  })
}
