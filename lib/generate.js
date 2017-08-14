var render = require('./render')
var metalsmith = require('metalsmith')
var download = require('download-git-repo')

module.exports = function (settings, callback) {
  download(settings.template, settings.from, function (err) {
    if (err) throw err

    metalsmith(settings.from)
      .destination(settings.to)
      .use(render)
      .build(callback)
  })
}