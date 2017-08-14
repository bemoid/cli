var render = require('./render')
var metalsmith = require('metalsmith')

module.exports = (args, callback) => {
  metalsmith(args.boilerplate)
      .destination(args.to)
      .use(render)
      .build(callback)
}