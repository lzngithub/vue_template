import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/page/home/index.vue';
import Login from '@/page/login/index.vue';
import User from '@/page/user/index.vue';
import userRouter from './data/userRouter';
Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/home',
    name: 'home',
    component: Home,
  }, {
    path: '/login',
    name: 'login',
    component: Login,
  }, {
    path: '/user',
    name: 'user',
    component: User,
    children: [
      ...userRouter,
    ],
  },
  ],
});

export default router;
