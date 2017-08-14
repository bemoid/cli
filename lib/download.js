var download = require('download-git-repo')

module.exports = function (args, callback) {
  download(args.from, args.to, callback)
}