import { bot } from '../config/bot';
import { getGoogleAuthURL } from '../config/google-auth';

bot.command('auth', async (ctx) => {
  ctx.reply(await getGoogleAuthURL());
});
