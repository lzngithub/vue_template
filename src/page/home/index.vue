<template>
  <div id="home">
    home
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.$store.state.home.pageSize);
  },
};
</script>

<style lang='less' scoped>

</style>
