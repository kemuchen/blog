import treeUtils from '@/utils/common/treeUtils';

const ListShowModel = {
  namespace: 'listShow',
  state: {
    data: [
      { id: 1, name: "办公管理", pid: 0 },
      { id: 2, name: "请假申请", pid: 1 },
      { id: 3, name: "出差申请", pid: 1 },
      { id: 4, name: "请假记录", pid: 2 },
      { id: 5, name: "系统设置", pid: 0 },
      { id: 6, name: "权限管理", pid: 5 },
      { id: 7, name: "用户角色", pid: 6 },
      { id: 8, name: "菜单设置", pid: 6 },
    ],
    treeData: [],
  },

  effects: {
    // 将一位数组转化为树形结构
    *handleToTree({ _, callback }, { put, select }) {
      const { data } = yield select(states => states.listShow);
      yield put({
        type: 'save',
        payload: {
          treeData: treeUtils.toTree(data),
        }
      });

      if (typeof callback === 'function') callback();
    }
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
export default ListShowModel;
