var download = require('download-git-repo')

module.exports = (args, callback) => {
  download(args.from, args.to, callback)
}