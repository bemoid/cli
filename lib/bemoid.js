const path = require('path')
const config = require('../package').bemoid

/**
 * Converts Bemoid's json schema to JavaScript objects.
 *
 * @param  {String} dir
 * @return {Object}
 */
module.exports = function (dir) {
  const package = path.join(dir, 'node_modules', config.package.dir)
  const bemoid = require(path.join(package, 'package.json')).bemoid

  let obj = {}

  bemoid.schema.forEach((name) => {
    obj[name] = require(path.join(package, bemoid.paths.schema, name))
  })

  return obj
}