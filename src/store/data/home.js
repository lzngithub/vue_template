import {
  PAGE_SIZE
} from '../mutations';

const home = {
  state: {
    pageSize: {}
  },
  getters: {},
  mutations: {
    [PAGE_SIZE] (state, status) {
      state.pageSize = status;
    }
  },
  actions: {
    set_page_size ({
      commit
    }, status) {
      commit(PAGE_SIZE, status);
    }
  }
};

export default home;