import request from '@/utils/request/request';

/**
 * 登录
 * @param {*} params
 */
export async function fakeAccountLogin(params) {
  return request.post('/api/system/login', {
    data: params,
  });
}
