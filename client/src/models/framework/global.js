import { getDict, getDynamicDict, queryNotices, readNotice } from '@/services/framework/global';
import {isEmpty} from '@/utils/global/utils';

const GlobalModel = {
  namespace: 'global',
  state: {
    collapsed: false,
    loading: false
  },
  effects: {
    /**
     * 查询字典项
     * @param {*} param0 
     * @param {*} param1 
     */
    *fetchDict({ payload, callback }, { call, put }) {
      const response = yield call(getDict, payload);
      if (!isEmpty(response)) {
        let dicttype = payload.dicttype;
        payload[dicttype] = response;
        yield put({
          type: 'show',
          payload
        });
        if (callback) callback(responseData);
      }
    },

    /**
     * 查询消息列表
     * @param {*} _ 
     * @param {*} param1 
     */
    *fetchNotices(_, { call, put }) {
      const data = yield call(queryNotices) || [];
      if (!isEmpty(data)) {
        yield put({
          type: 'show',
          payload: {
            notices: data
          },
        });
        yield put({
          type: 'show',
          payload: {
            unreadCount: data.length
          }
        });
      }
    },
  },
  reducers: {
    /**
     * 保存字典项
     * @param {*} state 
     * @param {*} payload 
     */
    show(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },

    /**
     * 新收到推送消息
     * @param {*} state 
     * @param {*} param1 
     */
    addNotices(state, { payload }) {
      if (payload) {
        const notices = state.notices || [];
        notices.push(payload);
        let unreadCount = state.unreadCount || 0;
        unreadCount += 1;
        return {
          collapsed: false,
          ...state,
          notices,
          unreadCount,
        };
      }
    },
  }
};
export default GlobalModel;
