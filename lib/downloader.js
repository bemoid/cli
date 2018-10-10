const download = require('download-git-repo')

/**
 * Fetches specified template to defined directory.
 *
 * @param  {Object}   args
 * @param  {Function} callback
 */
module.exports = (args, callback) => {
  download(args.from, args.to, callback)
}