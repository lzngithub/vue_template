import Vue from 'vue';
import Vuex from 'vuex';

import login from './data/login';
import home from './data/home';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    home
  }
});