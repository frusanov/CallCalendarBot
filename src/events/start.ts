import { bot } from '../config/bot';
import { DB } from '../config/db';
import { Group } from '../models/group';
import { User } from '../models/user';

bot.start(async (ctx) => {
  const tgID = ctx.from.id;
  const chatType = ctx.chat.type;
  const isBot = ctx.from.is_bot;

  if (isBot || chatType !== 'private') return;

  await DB.manager
    .findOneByOrFail(User, { tgID })
    .then(async () => {
      ctx.reply('Hi again!');
    })
    .catch(async (e) => {
      const user = new User();
      user.tgID = tgID;
      await DB.manager.save(user);
      ctx.reply('Wellcome to the @callCalendarBot!');
    });
});
