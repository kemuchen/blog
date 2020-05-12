import request from '@/utils/request/request';

// 添加或编辑用户
export async function addUser(params) {
    return request.put('/api/system/user', {
        data: {
            ...params,
        },
    })
}

// 删除用户
export async function deleteUser(params) {
    return request.post('/api/system/user', {
        data: params,
    })
}

// 查询用户列表
export async function getUsers(params) {
    return request.get('/api/system/users', {
        params: params
    })
}