import Vue from 'vue';

// eslint-disable-next-line require-jsdoc
function disposeAxiosData(config) {
  if (Number(config.response.data.code) === 200) {
    if (config.success && typeof config.success === 'function') {
      config.success(config.response);
    }
  } else {
    Vue.prototype.$Notice.error({
      title: '错误',
      desc: config.response.data.errmsg || '获取数据异常',
    });
    if (config.unsuccess && typeof config.unsuccess === 'function') {
      config.unsuccess();
    }
  }
  return config;
}

export {
  disposeAxiosData,
};
