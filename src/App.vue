<template>
  <div id="app">
    <top-bar></top-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import topBar from '@/page/topBar/index';
export default {
  name: 'app',
  components: {
    topBar,
  },
};
</script>

<style>
@import url('~@/assets/iconfont/iconfont.css');
html,body {
  width: 100%;
  height:100%;
}
*{
  padding:0;
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  min-height:100%;
}
</style>
