const mocks = require('./mocks');

module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = process.env.VUE_APP_SHOP_NAME;
      return args;
    });
  },
  pluginOptions: {
    'serve-api-mocks': {
      base: '/api/mocks',
      routes: mocks
    }
  },
  devServer: {
    open: 'Google Chrome'
  }
};
