import { bot } from '../config/bot';
import { DB } from '../config/db';
import { Group } from '../models/group';
import { User } from '../models/user';

bot.start(async (ctx) => {
  console.log(ctx.chat);

  const tgID = ctx.from.id;
  const chatType = ctx.chat.type;
  const isBot = ctx.from.is_bot;

  if (isBot) return;

  if (chatType === 'private') {
    await DB.manager.delete(User, { tgID });
  } else {
    await DB.manager.delete(Group, { tgID });
  }
});
