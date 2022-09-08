import * as Winston from 'winston';
import chalk from 'chalk';
import { NODE_ENV } from './constants';

const devLoggerFormat = Winston.format.printf(({ level, message, splat, timestamp }) => {
  const date = new Date(timestamp as string);

  const time = new Intl.DateTimeFormat('eu', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(date);

  return `[${chalk.bold(level)}] ${chalk.bold(time)} - ${message}`;
});

export const logger = Winston.createLogger({
  level: NODE_ENV === 'production' ? 'info' : 'debug',
  format: Winston.format.combine(Winston.format.timestamp(), Winston.format.json()),
  transports: [
    new Winston.transports.File({
      filename: 'log/error.log',
      level: 'error',
    }),
    new Winston.transports.File({ filename: 'log/combined.log' }),
    new Winston.transports.Console({
      format: Winston.format.combine(
        Winston.format.colorize(),
        Winston.format.simple(),
        devLoggerFormat
      ),
    }),
  ],
});
