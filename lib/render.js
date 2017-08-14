var async = require('async');
var bemoid = require('../lib/bemoid')
var handlebars = require('handlebars')
var render = require('consolidate').handlebars.render;

handlebars.registerHelper('uppercase', function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
})

handlebars.registerHelper('add', function(a, b) {
  return a + b;
});

/**
 * Template in place plugin.
 *
 * @param {Object} files
 * @param {Metalsmith} metalsmith
 * @param {Function} done
 */
module.exports = function (files, metalsmith, done){
  var keys = Object.keys(files);

  async.each(keys, run, done);

  function run(file, done){
    var str = files[file].contents.toString();

    render(str, bemoid, function(err, res){
      if (err) return done(err);

      files[file].contents = new Buffer(res);

      done();
    });
  }
}