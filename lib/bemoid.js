var path = require('path')

module.exports = function (dir) {
  var package = path.join(dir, 'node_modules/@bemoid/bemoid')

  var imports = require(path.join(package, 'json/imports'))
  var variables = require(path.join(package, 'json/variables'))

  return { imports, variables }
}