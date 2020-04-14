<template>
  <div id="home">
    <Row>
      <Col span="6">
        <div style="width:100%;height:300px;border:1px solid green;padding:0px">
          <div id="chart1" style="width:100%;height:100%"></div>
        </div>
      </Col>
      <Col span="6">
        <div style="height:300px;border:1px solid green">
          {{$t('message.name')}}
          <Button>{{$t('message.name')}}</Button>
          <Select v-model="seled" @on-change="selLanguage">
            <Option v-for="(item,index) in sel"
            :key="index"
            :value="item.value" >{{item.babel}}</Option>
          </Select>
        </div>
      </Col>
      <Col span="6" >
        <div style="height:300px;border:1px solid green">
          {{user}}
        </div>
      </Col>
      <Col span="6" >
        <div style="height:300px;border:1px solid green">
          1
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import {home} from '@/page/echart/index';
export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      chart1: {
        option: home.chart1,
      },
      seled: '',
      sel: [
        {
          value: 'en-US',
          babel: 'English',
        },
        {
          value: 'zh-CN',
          babel: '中文',
        },
      ],
      user: '接口数据',
    };
  },
  created() {
    // 处理图表的数据
    this.handleData();
    // dom更新后才会执行里面的内容
    this.$nextTick(()=>{
      // 图表挂载到dom元素上
      this.chartInit('chart1');
    });
    this.$apis.home.queryUser().then((res) =>{
      this.$utils.disposeAxiosData({
        response: res,
        success: (res) => {
          console.log(res);
          this.user = res.data.payload;
        },
      });
    });
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.$store.state.home.pageSize);
  },
  methods: {
    handleData() {
      const xData = ['4/6', '4/7', '48/', '4/9', '4/10'];
      const sData = [10, 20, 50, 60, 63];
      this.chart1.option.xAxis.data = xData;
      this.chart1.option.series[0].data = sData;
    },
    chartInit(id) {
      console.log(id, this[id].option);
      const div = document.getElementById(id);
      const myChart = this.$echarts.init(div);
      myChart.setOption(this[id].option);
    },
    selLanguage(val) {
      console.log(val);
      this.$i18n.locale = val;
      this.$store.dispatch('set_language', val);
      localStorage.setItem('language', val);
      // this.$forceUpdate();
    },
  },
};
</script>

<style lang='less' scoped>

</style>
