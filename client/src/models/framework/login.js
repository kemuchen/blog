import { stringify } from 'querystring';
import router from 'umi/router';
import { fakeAccountLogin } from '@/services/framework/login';
import { setAuthority } from '@/utils/framework/authority';
import { getPageQuery, isEmpty } from '@/utils/global/utils';
import { Modal, message } from 'antd';
const { confirm } = Modal;

const Model = {
  namespace: 'login',
  state: {
    status: undefined,
    currentUser: JSON.parse(sessionStorage.getItem('currentUser')),
    errmessage: undefined,
  },
  effects: {
    // 登录
    *login({ payload }, { call, put }) {
      const responseData = yield call(fakeAccountLogin, payload);
      if (!isEmpty(responseData)) {
        yield put({
          type: 'changeLoginStatus',
          payload: {
            status: 'ok',
            currentUser: responseData.user,
            errmessage: '',
          },
        });
        // 登录成功
        sessionStorage.setItem('currentUser', JSON.stringify(responseData.user));
        sessionStorage.setItem('token', responseData.token);
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        let { redirect } = params;
        if (redirect) {
          const redirectUrlParams = new URL(redirect);
          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);

            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1);
            }
          } else {
            window.location.href = '/';
            return;
          }
        }
        router.replace(redirect || '/');
      } else {
          yield put({
            type: 'changeLoginStatus',
            payload: {
              status: 'error',
              currentUser: {},
              errmessage: '用户名或密码错误',
            },
          });
        }
    },

    // 退出登录
    logout() {
      confirm({
        title: '确定退出登录?',
        content: '',
        onOk() {
          sessionStorage.removeItem('currentUser');
          const { redirect } = getPageQuery(); // Note: There may be security issues, please note
          if (window.location.pathname !== '/user/login' && !redirect) {
            router.replace({
              pathname: '/user/login',
              search: stringify({
                redirect: window.location.href,
              }),
            });
          }
        },
        onCancel() {},
      });
    },
  },
  reducers: {
    changeLoginStatus(state, { payload }) {
      setAuthority(payload.currentAuthority);
      return {
        ...state,
        status: payload.status,
        currentUser: payload.currentUser,
        errmessage: payload.errmessage,
      };
    },
  }
};
export default Model;
