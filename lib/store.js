const path = require('path')
const home = require('user-home')

/**
 * Gets a CLI cache directory path located in user home folder.
 *
 * @return {String}
 */
let storePath = () => {
  return path.join(home, '.bemoid', 'templates')
}

/**
 * Gets a directory path to the cached template.
 *
 * @param  {String} templateName
 * @return {String}
 */
let templatePath = (templateName) => {
  return path.join(storePath(), templateName.replace(/\//g, '-'))
}

module.exports = { storePath, templatePath }