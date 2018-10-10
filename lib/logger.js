const chalk = require('chalk')

module.exports = {
  /**
   * Output to the console a standard not distinguished message.
   */
  comment(message) {
    console.log(chalk.grey(message))
  },

  /**
   * Output to the console a sucessful message.
   */
  success(message) {
    console.log(`${chalk.green('✓')} ${message}`)
  },

  /**
   * Output to the console a non-critical message.
   */
  warning(message) {
    console.log(`${chalk.yellow('‼')} ${message}`)
  },

  /**
   * Output to the console a critical message
   * and terminate a further process.
   */
  error(message) {
    console.log(`${chalk.red('✘')} ${message}`)
    process.exit(1)
  }
}