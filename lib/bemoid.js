var path = require('path')
var bemoid = require('../package').config.bemoid

module.exports = function (dir) {
  var obj = {}
  var package = path.join(dir, 'node_modules', bemoid.package)
  var config = require(path.join(package, 'package.json')).config

  config.schemas.forEach((name) => {
    obj[name] = require(path.join(package, config.paths.schemas, name))
  })

  return obj
}