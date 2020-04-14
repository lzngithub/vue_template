import {
  PAGE_SIZE,
  SET_LANGUAGE,
} from '../mutations';

const home = {
  state: {
    pageSize: {},
    setLanguage: '',
  },
  getters: {},
  mutations: {
    [PAGE_SIZE](state, status) {
      state.pageSize = status;
    },
    [SET_LANGUAGE](state, setLanguage) {
      localStorage.setItem('language', setLanguage);
      state.setLanguage = setLanguage;
    },
  },
  actions: {
    set_language({commit}, setLanguage) {
      commit(SET_LANGUAGE, setLanguage);
    },
  },
};

export default home;
