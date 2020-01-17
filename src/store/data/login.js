import {
  LOGIN_STATUS
} from '../mutations';

const login = {
  state: {
    loginStatus: false
  },
  getters: {},
  mutations: {
    [LOGIN_STATUS] (state, status) {
      state.loginStatus = status;
    }
  },
  actions: {
    login_status ({
      commit
    }, status) {
      commit(LOGIN_STATUS, status);
    }
  }
};

export default login;