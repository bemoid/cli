const path = require('path')
const home = require('user-home')

const DIR = '.bemoid'

let storePath = (argument) => {
  return path.join(home, DIR, 'templates')
}

let templatePath = (templateName) => {
  return path.join(storePath(), templateName.replace(/\//g, '-'))
}

module.exports = { storePath, templatePath }