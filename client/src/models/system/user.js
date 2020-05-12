import { addUser, updateUser, deleteUser, getUsers } from "@/services/system/user";
import {isEmpty} from '@/utils/global/utils';

export default {
    namespace: 'user',
    state: {
        users: [],   // 返回用户列表
        pagination: {},  // 分页相关信息
        tabActiveKey: '1',  // 默认是用户列表Tab
        searchParams: [],           //搜索功能的参数值
        tableRecordData: [],        //表格中一行的数据
    },

    effects: {
        * handleSubmitBtn({ payload, callback }, { call, put }) {
            //提交数据和处理提交按钮状态
            yield call(addUser, payload);
            if (typeof callback === 'function') callback();
        },

        * handleDelData({ payload, callback }, { call, put }) {
            //删除用户
            yield call(deleteUser, payload);
            if (typeof callback === 'function') callback();
        },

        * handleListData({ payload, callback }, { call, put }) {
            //获取用户列表
            const data = yield call(getUsers, payload);
            if (!isEmpty(data)) {
                yield put({
                    type: 'show',
                    payload: {
                        listData: data.data,
                        pagination: {
                            total: data.total,
                            current: payload.current,
                            pageSize: payload.pageSize,
                        },
                    },
                });
                if (callback) callback();
            }
        },

        * handleTabKey({ payload }, { put }) {
            //改变Tabs的值
            yield put({
                type: 'show',
                payload: payload,
            });
        },

        * handleSearchParams({ payload }, { put }) {
            //保存搜索框，用户输入的参数选项值
            yield put({
                type: 'show',
                payload: payload,
            });
        },

        * handleTableRecordData({ payload }, { put }) {
            //保存表格中一行的数据
            yield put({
                type: 'show',
                payload: payload,
            });
        }
    },

    reducers: {
        show(state, { payload }) {
            return {
                ...state,
                ...payload,
            };
        },
    }
}