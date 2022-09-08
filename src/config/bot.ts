import { BOT_TOKEN } from './constants';
import { Telegraf } from 'telegraf';
import { logger } from './logger';

export const bot = new Telegraf(BOT_TOKEN);

export async function initBot() {
  await bot.launch();

  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));

  logger.info('Bot engine was launched!');
}
