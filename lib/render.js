const async = require('async');
const handlebars = require('handlebars')
const render = require('consolidate').handlebars.render;

handlebars.registerHelper('uppercase', (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
})

handlebars.registerHelper('add', (a, b) => {
  return a + b;
})

handlebars.registerHelper('if_not_eq', function(a, b, opts) {
  if (a !== b) {
    return opts.fn(this);
  } else {
    return opts.inverse(this);
  }
})

/**
 * Template in place plugin.
 *
 * @param {Object} files
 * @param {Metalsmith} metalsmith
 * @param {Function} done
 */
module.exports = (files, metalsmith, done) => {
  let keys = Object.keys(files)
  let metadata = metalsmith.metadata()

  async.each(keys, run, done)

  function run (file, done) {
    let str = files[file].contents.toString()

    render(str, metadata, (err, res) => {
      if (err) return done(err)

      files[file].contents = new Buffer(res)

      done()
    })
  }
}