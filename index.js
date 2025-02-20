require('dotenv').config();
const { Bot, GrammyError, HttpError } = require('grammy');

const bot = new Bot(process.env.TOKEN);


bot.api.setMyCommands([
    {
        command: 'start',
        description: 'Start bot',
    },
    {
        command: 'gifts',
        description: 'Get available gifts'
    },
])


bot.command('gifts', async (ctx) => {
    let all_available_gifts = (await bot.api.getAvailableGifts()).gifts
    console.log(typeof all_available_gifts)
    let unique_gifts = []
    for (const gift of all_available_gifts) {
        if (gift['total_count'] !== undefined) {
            unique_gifts.push({
                id: gift['id'],
                emoji: gift['sticker']['emoji'],
                star_count: gift['star_count'],
                upgrade_star_count: gift['upgrade_star_count'],
                remaining_count: gift['remaining_count'],
                total_count: gift['total_count']
            })
        }
    }
    console.log(unique_gifts)
    await ctx.reply(unique_gifts)
})

bot.command('start', async (ctx) => {
    await ctx.reply('Hello. Use /gifts command to get list of all available unique gifts.')
});


bot.catch((err) => {
    const ctx = err.ctx;
    console.error(`Error while handling update^ ${ctx.update.updateid}:`)
    const e = err.error;

    if (e instanceof GrammyError) {
        console.error("Error in request", e.description);
    } else if (e instanceof HttpError) {
        console.error("Could not contact Telegram:", e);
    } else {
        console.error("Unknown error:", e);
    }
});


bot.start();