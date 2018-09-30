const path = require('path')
const config = require('../package').bemoid

module.exports = function (dir) {
  const package = path.join(dir, 'node_modules', config.package.dir)
  const bemoid = require(path.join(package, 'package.json')).bemoid

  let obj = {}

  bemoid.schema.forEach((name) => {
    obj[name] = require(path.join(package, bemoid.paths.schema, name))
  })

  return obj
}