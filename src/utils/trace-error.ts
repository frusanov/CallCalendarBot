import chalk from 'chalk';

export function traceError(error: Error) {
  error.message = chalk.bold(error.message);
  console.log(`\n${chalk.redBright(error.stack)}\n`);
}
