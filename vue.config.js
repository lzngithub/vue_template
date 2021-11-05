/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?
    '/demo/' :
    '/',

  outputDir: 'demo', // 输出目录，默认dist

  assetsDir: 'static', // 静态资源文件夹名字

  indexPath: 'index.html', // html的输出路径

  filenameHashing: true,

  // When building in multi-pages mode, the webpack config will contain different plugins
  // (there will be multiple instances of html-webpack-plugin and preload-webpack-plugin).
  // Make sure to run vue inspect if you are trying to modify the options for those plugins.
  // pages: {
  //     index: {
  //         // entry for the pages
  //         entry: 'src/pages/index/index.js',
  //         // the source template
  //         template: 'src/pages/index/index.html',
  //         // output as dist/index.html
  //         filename: 'index.html',
  //         // when using title option,
  //         // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
  //         title: '首页',
  //         // chunks to include on this pages, by default includes
  //         // extracted common chunks and vendor chunks.
  //         chunks: ['chunk-vendors', 'chunk-common', 'index']
  //     }
  //     // when using the entry-only string format,
  //     // template is inferred to be `public/subpage.html`
  //     // and falls back to `public/index.html` if not found.
  //     // Output filename is inferred to be `subpage.html`.
  //     // subpage: ''
  // },

  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,

  // 是否使用包含运行时编译器的Vue核心的构建
  runtimeCompiler: false,

  // 默认情况下 babel-loader 忽略其中的所有文件 node_modules
  transpileDependencies: [],

  // 生产环境 sourceMap
  productionSourceMap: false,

  // cors 相关 https://jakearchibald.com/2017/es-modules-in-browsers/#always-cors
  // corsUseCredentials: false,
  // webpack 配置，键值对象时会合并配置，为方法时会改写配置
  // https://cli.vuejs.org/guide/webpack.html#simple-configuration
  configureWebpack: () => {
  },

  // webpack 链接 API，用于生成和修改 webapck 配置
  // https://github.com/mozilla-neutrino/webpack-chain
  chainWebpack: (config) => {
    // 配置目录别名alias
    config.resolve.alias
        .set('@', resolve('src'))
        .set('@assets', resolve('src/assets'))
        .set('@page', resolve('src/page'))
        .set('@common', resolve('src/common'))
        .set('@styles', resolve('src/styles'))
        .set('@router', resolve('src/router'));
    // 因为是多页面，所以取消 chunks，每个页面只对应一个单独的 JS / CSS
    config.optimization
        .splitChunks({
          cacheGroups: {},
        });

    // 'src/lib' 目录下为外部库文件，不参与 eslint 检测
    config.module
        .rule('eslint')
        .exclude
        .add('/Users/maybexia/Downloads/FE/community_built-in/src/lib')
        .end();
  },

  // 配置高于chainWebpack中关于 css loader 的配置
  css: {
    // 是否开启支持 foo.module.css 样式
    modules: false,

    // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
    extract: true,

    // 是否构建样式地图，false 将提高构建速度
    sourceMap: false,

    // css预设器配置项
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
      },

      postcss: {
        // options here will be passed to postcss-loader
        // plugins: [
        //     require('postcss-px-to-viewport')({
        //         unitToConvert: 'px',
        //         viewportWidth: 1920, //设计稿宽度
        //         viewportHeight: 1080, //设计稿高度
        //         unitPrecision: 13, //转换之后的精度
        //         toViewport: true, //px是否可以转为vw 或 vh
        //         isSavePx: true, //px是否保留
        //         propList: [
        //             '*'
        //         ], //  如果有些属性不想转为vw可以配置这个参数
        //         viewportUnit: 'vw',
        //         fontViewportUnit: 'vw',
        //         selectorBlackList: [],
        //         minPixelValue: 1,
        //         mediaQuery: false,
        //         replace: true,
        //         exclude: /(\/|\\)(node_modules)(\/|\\)/
        //     })
        // ]
      },

      less: {
        javascriptEnabled: true,
      },
    },
  },

  // All options for webpack-dev-server are supported
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    open: true,

    host: '0.0.0.0',

    port: 8080,

    https: false,

    hotOnly: false,

    proxy: 'http://10.167.213.134:8000',

    before: () => {
    },
  },
  // 构建时开启多进程处理 babel 编译
  parallel: require('os').cpus().length > 1,

  // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},

  // 第三方插件配置
  pluginOptions: {},
};
