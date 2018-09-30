const chalk = require('chalk')

module.exports = {
  comment(message) {
    console.log(chalk.grey(message))
  },

  success(message) {
    console.log(`${chalk.green('✓')} ${message}`)
  },

  warning(message) {
    console.log(`${chalk.yellow('‼')} ${message}`)
  },

  error(message) {
    console.log(`${chalk.red('✘')} ${message}`)
    process.exit(1)
  }
}