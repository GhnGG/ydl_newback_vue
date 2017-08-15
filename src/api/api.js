import axios from 'axios';

let base = '';

export const allget = (params,url) => {return axios.get(`${base}`+url, { params: params });};
