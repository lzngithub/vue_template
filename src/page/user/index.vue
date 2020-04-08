<template>
  <div id="user">
    <Row>
      <Col span="4"  v-for="(item,index) in nav" :key="index">
        <Button @click="setRouter(item.name)">{{item.babel}}</Button>
      </Col>
    </Row>
    <router-view />
  </div>
</template>

<script>
import nav from './common/config/index';
export default {
  name: 'user',
  data() {
    return {
      nav,
      isTrue: false,
    };
  },
  created() {
    console.log(this.nav);
  },
  methods: {
    setRouter(params) {
      this.$router.push({
        name: params,
      });
    },
  },
};
</script>
