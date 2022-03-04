require("dotenv").config();

const { BOT_TOKEN } = process.env;

const Telegraf = require("telegraf");
const TSL = require("telegraf-session-local");
const Stage = require("telegraf/stage");
const Scene = require("telegraf/scenes/base");
const session = require("telegraf/session");

//commands
const startCommand = require("./commands/start");
const helpCommand = require("./commands/help");
// scenes
const fromScene = require("./scenes/from");
const toScene = require("./scenes/to");
// services
const translate = require("./services/translate");
//handlers
const messageHandler = require('./handlers/message');
const inlineQueryHandler = require('./handlers/inlineQuery')
const init = async (bot, config) => {
    // stage, scenes
    const stage = new Stage([fromScene, toScene]);
    // middleware
    bot.use(new TSL({ database: "data/session.json" }).middleware());
    bot.use(stage.middleware());
    // commands
    bot.start(startCommand());
    bot.help(helpCommand());
    bot.command("from", (ctx) => ctx.scene.enter("from"));
    bot.command("to", (ctx) => ctx.scene.enter("to"));
    bot.command("lang", (ctx) =>
        ctx.reply(`${ctx.session.from} - ${ctx.session.to}`)
    );
    //handlers
    bot.on("message", messageHandler());
    bot.on('inline_query', inlineQueryHandler());
    return bot;
};

init(new Telegraf(BOT_TOKEN), process.env).then(async (bot) => {
    await bot.launch();
    console.log(`Launched ${new Date()}`);
});

module.exports = init;


// 1. add language code validation
// 2. auto language detect -> translate -> message, inline
// 3. error handling -> Yandex API, telegraf bot