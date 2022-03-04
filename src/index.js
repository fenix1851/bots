require('dotenv').config();

const { BOT_TOKEN } = process.env;

const { Telegraf, session, Scenes:  {BaseScene, Stage } } = require('telegraf')

// commands 
const startCommand = require('./commands/start')
const helpCommand = require('./commands/help')
const settingsCommand = require('./commands/settings')
// scenes
const fromScene = require('./scenes/from')
const toScene = require('./scenes/to')
const init = async (bot, config) => {
    // stage & scenes
    const stage = new Stage([fromScene, toScene]);
    // middlewares
    bot.use(session())
    bot.use(stage.middleware())
    // commands
    // // start command
    bot.start(startCommand(bot))
    bot.command('help', helpCommand())
    bot.command('settings', settingsCommand(bot))
    bot.action('changeFromLanguage', ctx => ctx.scene.enter('from'))
    return bot;
}

init(new Telegraf(BOT_TOKEN), process.env).
then(async(bot)=> {
    await bot.launch()
    console.log(`Launched ${new Date}`)
})

module.exports = init