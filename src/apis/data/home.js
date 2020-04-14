import axios from '@/plugins/axios/index';
import url from '../url';

const queryUser = (params) => {
  return axios.get(url.home.queryUser, {params});
};

export {
  queryUser,
};
