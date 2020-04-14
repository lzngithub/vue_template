import Vue from 'vue';
import store from '../../store/index';
import VueI18n from 'vue-i18n';
import en from './data/en-US';
import zh from './data/zh-CN';
import iviewEn from 'view-design/src/locale/lang/en-US';
import iviewZh from 'view-design/src/locale/lang/zh-CN';

Vue.use(VueI18n);
const storeage = localStorage.getItem('language');
// 获取浏览器首选语言
const navLang = navigator.language;
const localLang = (navLang==='en-US' || navLang === 'zh-CN') ? navLang : false;
// const lang = localLang || 'zh-CN';
const lang = storeage || localLang || 'zh-CN';
console.log(lang);
store.dispatch('set_language', {lang});
const messages = {
  'zh-CN': {
    ...zh,
    ...iviewZh,
  },
  'en-US': {
    ...en,
    ...iviewEn,
  },
};

const i18n =new VueI18n({
  locale: lang,
  messages,
});

export default i18n;
