<template>
  <div id="content">
    <button class="button-style" @click="changeRouter('login')">login</button>
    <button class="button-style" @click="changeRouter('home')">home</button>
    <i class="icon iconfont deom-Badminton">&#xe957;</i>
  </div>
</template>

<script>
export default {
  name: "toBar",
  components: {},
  methods: {
    changeRouter(params) {
      this.$router.push({
        name: params
      });
    }
  }
};
</script>

<style lang='less' scoped>
.button-style {
  padding: 5px 20px;
  margin: 10px;
}
</style>