import axios from 'axios';

let base = 'http://test-manage.dianliaoapp.com/ydlManage/server/index.php';

export const allget = (params,url) => {return axios.get(`${base}`+url, { params: params });};
