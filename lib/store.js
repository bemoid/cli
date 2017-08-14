const dir = '.bemoid-templates'

var path = require('path')
var home = require('user-home')

let storePath = (argument) => {
  return path.join(home, dir)
}

let templatePath = (templateName) => {
  return path.join(storePath(), templateName.replace(/\//g, '-'))
}

module.exports = { storePath, templatePath }