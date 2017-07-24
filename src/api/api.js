import axios from 'axios';

let base = 'http://test-manage.dianliaoapp.com/ydlManage/server/index.php';

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };

export const allget = (params,url) => {return axios.get(`${base}`+url, { params: params });};
