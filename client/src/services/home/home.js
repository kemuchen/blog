import { stringify } from 'qs';
import request from '@/utils/request';

export async function queryHomeData(param) {
	return request('http://localhost:8080/web/home', {
		method: 'POST',
		mode: 'cors',
		body: param,
		headers: {
			"Content-Type": "application/json",
		},
	});
}