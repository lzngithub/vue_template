import Vue from 'vue';
import App from './App.vue';
import router from './router/index';// 导入路由到main.js
import store from './store/index';
import ViewUI from 'view-design';
import '../src/styles/iview/theme/index.less';


Vue.config.productionTip = false;
Vue.use(ViewUI);

new Vue({
  store,
  router, // 将路由和页面关联起来
  render: (h) => h(App), // 生成内容，其实是关联APP.vue中内容
}).$mount('#appCopy');// 挂载到index.html中的appCopy中
