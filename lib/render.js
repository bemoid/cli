var async = require('async');
var bemoid = require('../lib/bemoid')
var handlebars = require('handlebars')
var render = require('consolidate').handlebars.render;

handlebars.registerHelper('uppercase', (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
})

handlebars.registerHelper('add', (a, b) => {
  return a + b;
})

/**
 * Template in place plugin.
 *
 * @param {Object} files
 * @param {Metalsmith} metalsmith
 * @param {Function} done
 */
module.exports = (files, metalsmith, done) => {
  var keys = Object.keys(files)

  async.each(keys, run, done)

  function run (file, done) {
    var str = files[file].contents.toString()

    render(str, bemoid, (err, res) => {
      if (err) return done(err)

      files[file].contents = new Buffer(res)

      done()
    })
  }
}