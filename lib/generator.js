const path = require('path')
const metalsmith = require('metalsmith')

const bemoid = require('./bemoid')
const render = require('./render')

/**
 * Renders specified template using Bemoid's json schema files.
 *
 * @param  {Object}   args
 * @param  {Function} callback
 */
module.exports = (args, callback) => {
  let engine = metalsmith(args.boilerplate)
  let metadata = engine.metadata()

  let rootDir = path.resolve('.')

  metadata.bemoid = bemoid(rootDir)

  metadata.bemoid.path = {
    relative: path.relative(args.to, rootDir)
  }

  engine.destination(args.to)
      .use(render)
      .build(callback)
}