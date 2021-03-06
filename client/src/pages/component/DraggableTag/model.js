import arrayUtils from '@/utils/common/arrayUtils';

const DraggableModel = {
  namespace: 'draggable',
  state: {
    items: [
      { id: 1, name: '人事管理' },
      { id: 2, name: '财务管理' },
      { id: 3, name: '系统管理' },
    ],
    backupItems: [
      { id: 1, name: '人事管理' },
      { id: 2, name: '财务管理' },
      { id: 3, name: '系统管理' },
    ],
  },
  effects: {
    // 排序
    *fetchSortTags({ payload, callback }, { select, put }) {
      const { items } = yield select(state => state.draggable);

      const { oldIndex, newIndex } = payload;
      yield put({
        type: 'save',
        payload: {
          items: arrayUtils.arrayMove(items, oldIndex, newIndex),
        },
      });

      // 执行回调函数
      if (typeof callback === 'function') {
        callback();
      }
    },
    
    // 还原
    *fetchResetTags({ _, callback }, { select, put }) {
      const { backupItems } = yield select(state => state.draggable);
      yield put({
        type: 'save',
        payload: { items: backupItems },
      });

      // 执行回调函数
      if (typeof callback === 'function') {
        callback();
      }
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
export default DraggableModel;
