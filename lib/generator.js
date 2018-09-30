const path = require('path')
const bemoid = require('./bemoid')
const render = require('./render')
const metalsmith = require('metalsmith')

module.exports = (args, callback) => {
  let engine = metalsmith(args.boilerplate)
  let metadata = engine.metadata()

  metadata.bemoid = bemoid(path.resolve('.'))

  engine.destination(args.to)
      .use(render)
      .build(callback)
}