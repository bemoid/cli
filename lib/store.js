const path = require('path')
const home = require('user-home')

let storePath = (argument) => {
  return path.join(home, '.bemoid', 'templates')
}

let templatePath = (templateName) => {
  return path.join(storePath(), templateName.replace(/\//g, '-'))
}

module.exports = { storePath, templatePath }