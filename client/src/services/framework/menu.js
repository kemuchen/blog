import request from '@/utils/request/request';

/**
 * 根据用户id查询菜单信息
 * @param {*} userid
 */
export async function getMenuData(userid) {
  return request.get('/api/system/rights/' + userid);
}
