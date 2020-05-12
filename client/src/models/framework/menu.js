import { getMenuData } from '@/services/framework/menu'; // 通过后台返回特定的数组json或者mock模拟数据
import {isEmpty} from '@/utils/global/utils';

const MenuModel = {
  namespace: 'menu',
  state: {
    menuData: [],
  },
  effects: {
    *getMenuData({ payload, callback }, { call, put }) {
      const data = yield call(getMenuData, payload);
      if (!isEmpty(data)) {
        let repData = JSON.stringify(data).replace(/right_name/g, 'name').replace(/right_url/g, 'path');
        // 格式化菜单
        repData = JSON.parse(repData);
        let menus = [];
        for (let i = 0; i < repData.length; i++) {
          if (repData[i].sub_sys_right != undefined) {
            for (let j = 0; j < repData[i].sub_sys_right.length; j++) {
              repData[i].sub_sys_right[j]['authority'] = ['admin'];
            }
            repData[i]['right']['routes'] = repData[i].sub_sys_right;
          }
          delete repData[i].sub_sys_right;
          menus.push(repData[i].right);
        }
        yield put({
          type: 'save',
          payload: menus,
        });
      }
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        menuData: action.payload || [],
      };
    },
  },
};
export default MenuModel;
