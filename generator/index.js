const path = require('path')

module.exports = (api) => {
  // 请求库 https://test.yangcong345.com/onion-utils-docs/global.html#axiosInterceptors
  api.injectImports(api.entryFile, [`import '@/axios.config'`])

  api.extendPackage({
    dependencies: {
      // CDN http://10.8.8.253:8015/
      axios: '0.19.2',
      '@guanghe-pub/onion-utils': '^1.4.0',
    },
  })

  api.render('./template', {
    name: api.rootOptions.projectName,
  })

  api.extendPackage({
    scripts: {
      serve: 'cactus serve',
      build: 'cactus build',
      lint: 'cactus lint',
      deploy: 'sh docker.sh',
    },
  })
}
