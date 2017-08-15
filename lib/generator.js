var path = require('path')
var bemoid = require('./bemoid')
var render = require('./render')
var metalsmith = require('metalsmith')

module.exports = (args, callback) => {
  var engine = metalsmith(args.boilerplate)
  var metadata = engine.metadata()

  metadata.bemoid = bemoid(path.resolve('.'))

  engine.destination(args.to)
      .use(render)
      .build(callback)
}