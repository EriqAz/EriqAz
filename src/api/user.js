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
