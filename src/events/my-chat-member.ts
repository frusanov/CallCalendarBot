import { bot } from '../config/bot';
import { DB } from '../config/db';
import { Group } from '../models/group';

bot.on('my_chat_member', async (ctx) => {
  const isMemeber = ctx.myChatMember.new_chat_member.status === 'member';
  const tgID = ctx.chat.id;

  if (isMemeber) {
    await DB.manager
      .findOneByOrFail(Group, { tgID })
      .then(async () => {
        ctx.reply('Hi again!');
      })
      .catch(async (e) => {
        const group = new Group();
        group.tgID = tgID;
        await DB.manager.save(group);
        ctx.reply('Wellcome to the @callCalendarBot!');
      });
  } else {
    await DB.manager.delete(Group, { tgID });
  }
});
