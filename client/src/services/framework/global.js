import request from '@/utils/request/request';

/**
 * 查询动态字典信息
 * @param {*} params
 */
export async function getDynamicDict(params) {
  return request.get('/api/common/dynamicDict', {
    data: params,
  });
}

/**
 * 查询静态字典
 * @param {*} params
 */
export async function getDict(params) {
  return request.get('/api/common/dict/' + params.dicttype);
}

/**
 * 查询用户未读消息
 */
export async function queryNotices() {
  let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  if (currentUser) {
    return request('/api/system/un_read_mssages/' + currentUser.id);
  }
}

/**
 * 阅读消息
 * @param {*} id 
 */
export async function readNotice(id) {
  return request.post('/api/system/read_message', {
    params: {
      id: id
    }
  });
}
