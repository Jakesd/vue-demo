import axios from 'axios';
let base = 'http://localhost:9000';

export const requestLogin = params =>{
  return axios.post(base + '/login', params).then(res => res.data);
}
