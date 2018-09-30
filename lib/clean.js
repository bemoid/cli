const path = require('path')
const rimraf = require('rimraf')
const home = require('user-home')

const DIR = '.bemoid'

var spinner = ora('Working ...')

spinner.start(`Removing configuration [${DIR}] directory ...`)

rimraf(path.join(home, DIR), function (err) {
  if (err) throw err

  spinner.stop()

  logger.success(`Bemoid CLI configuration files sucessfully removed.`)
});

