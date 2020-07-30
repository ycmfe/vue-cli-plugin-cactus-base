module.exports = (api) => {
  api.render('./template')

  api.extendPackage({
    scripts: {
      serve: 'cactus serve',
      build: 'cactus build',
      lint: 'cactus lint',
    },
  })
}
