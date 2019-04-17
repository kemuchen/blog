import { queryHomeData } from '@/services/home/home';

export default {
	namespace: 'home',
	state: {
		carousel: [],
		articleList: [],
		total: 1,
    	loading: false,
	},

	effects: {
		*fetch(param, { call, put }) {
	      const response = yield call(queryHomeData, param.param);
	      yield put({
	        type: 'save',
	        payload: response
	      });
	    },
	},

	reducers: {
	    save(state, { param, payload }) {
	      return {
	        ...state,
	        ...payload,
	      };
	    },
	},
}