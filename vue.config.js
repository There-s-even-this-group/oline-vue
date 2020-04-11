module.exports = {
  devServer: {
    proxy: {
      '/': {
        target: 'http://111.229.66.183:8082',
        changeOrigin: true,
        pathRewrite: {
          '^/': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve:{
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'views': '@/views',
        'network': '@/network',
      }
    }
  }
}
