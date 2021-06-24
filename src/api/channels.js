import request from '@/utils/request'
/**
 * 获取用户频道
 * @returns
 */
export const reqChannels = () => request.get('/v1_0/user/channels')
