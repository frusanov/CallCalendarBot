import './utils/welcome';

import { initDB } from './config/db';
import { initBot } from './config/bot';
import { logger } from './config/logger';
import { traceError } from './utils/trace-error';

import './events';

(async () => {
  try {
    await initDB();
    await initBot();
  } catch (e: Error | any) {
    logger.error(e?.message);

    if (e instanceof Error) traceError(e);

    process.exit(1);
  }
})();
