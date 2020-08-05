module.exports = (api) => {
  api.chainWebpack((config) => {
    // remove prefetch plugin
    // https://github.com/vuejs/preload-webpack-plugin
    config.plugins.delete('prefetch')
  })
}
