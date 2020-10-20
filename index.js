const fs = require('fs')
const path = require('path')
const WebpackCDNPlugin = require('webpack-cdn-plugin')

module.exports = (api) => {
  api.chainWebpack((config) => {
    // remove prefetch plugin
    // https://github.com/vuejs/preload-webpack-plugin
    config.plugins.delete('prefetch')

    // cdn config
    // https://www.npmjs.com/package/webpack-cdn-plugin
    if (fs.existsSync(path.join(process.cwd(), 'cdn.config.js'))) {
      const modules = require(path.join(process.cwd(), 'cdn.config.js'))()
      config.plugin('CDNPlugin').use(
        new WebpackCDNPlugin({
          prodUrl: ':path',
          crossOrigin: 'anonymous',
          modules,
        })
      )
    }
  })
}
