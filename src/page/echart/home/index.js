import {bar} from '../common/index';
const deepCopy = function(params) {
  return JSON.parse(JSON.stringify(params));
};
// eslint-disable-next-line require-jsdoc
function configChart(params) {
  const {id, option} = params;
  if (id === 'chart1') {
    option.legend = {
      data: ['利润'],
    };
    option.color = ['#3398DB'];
    option.backgroundColor = ['#052462'];
    option.yAxis.name = '利润';
    option.xAxis.name = '日期';
    option.title = {
      text: '开门小店',
      textStyle: {
        color: '#fff',
      },
    };
    option.textStyle = {
      color: '#fff',
    };
    return option;
  }
  return option;
};
const chart1 = configChart({
  id: 'chart1',
  option: deepCopy(bar),
});
export {
  chart1,
};
