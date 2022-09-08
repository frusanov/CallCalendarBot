import { resolve } from 'path';
import { DataSource } from 'typeorm';
import { logger } from './logger';
import { NODE_ENV } from './constants';

export const DB = new DataSource({
  type: 'better-sqlite3',
  database: resolve(__dirname, '../../tmp/db.sql'),
  entities: [resolve(__dirname, '../models/*.ts')],
  ...(NODE_ENV !== 'production'
    ? {
        logging: true,
        synchronize: true,
      }
    : {}),
});

export async function initDB() {
  logger.info('Initializing database...');

  await DB.initialize().then(() => {
    logger.info('Data Source has been initialized!');
  });
}
