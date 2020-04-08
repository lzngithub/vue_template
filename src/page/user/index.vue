<template>
  <div id="user">
    <Row>
      <Col span="4"  v-for="(item,index) in nav" :key="index">
        <Button>{{item.babel}}</Button>
      </Col>
    </Row>
  </div>
</template>

<script>
import nav from './common/config/index';
export default {
  name: 'user',
  data() {
    return {
      nav,
    };
  },
  created() {
    console.log(this.nav);
  },
};
</script>
