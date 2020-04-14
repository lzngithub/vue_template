import Vue from 'vue';
import App from './App.vue';
import router from './router/index';// 导入路由到main.js
import store from './store/index';
import ViewUI from 'view-design';
import '../src/styles/iview/theme/index.less';// 覆盖原理iview的样式
import * as echarts from 'echarts';
import i18n from './plugins/i18n/index';
import * as apis from '@/apis/index';
import * as utils from '@/utils/index';


Vue.config.productionTip = false;
Vue.use(ViewUI);
Vue.prototype.$echarts = echarts;
Vue.prototype.$apis = apis;
Vue.prototype.$utils = utils;

new Vue({
  store,
  router, // 将路由和页面关联起来
  i18n,
  render: (h) => h(App), // 生成内容，其实是关联APP.vue中内容
}).$mount('#appCopy');// 挂载到index.html中的appCopy中
