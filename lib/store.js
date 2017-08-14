const dir = '.bemoid-templates'

var path = require('path')
var home = require('user-home')

let path = function (argument) {
  return path.join(home, dir)
}

let templatePath = function (templateName) {
  return path.join(path(), templateName.replace(/\//g, '-'))
}

module.exports = { path, templatePath }