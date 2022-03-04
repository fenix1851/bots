const { Telegraf, Scenes:  {BaseScene} } = require('telegraf')
require('dotenv').config();

const { BOT_TOKEN } = process.env;
const bot = new Telegraf(BOT_TOKEN)
const to = new BaseScene('to');
to.enter((ctx)=>{
    bot.telegram.sendMessage(ctx.chat.id, 'Язык вывода:',
    {
        reply_markup : {
            inline_keyboard: [
                [
                    { text: '🇺🇸 Английский', callback_data: 'us'},
                    { text: '🇷🇺 Русский', callback_data: 'ru'},
                ],
                [
                    { text: '🇺🇿 Узбекский', callback_data: 'uz'},
                    { text: '🇨🇳 Китайский', callback_data: 'zh'},
                ],
                [                     
                    { text: '🇦🇪 Арабский', callback_data: 'ar'},
                    { text: '🇹🇷 Турецкий', callback_data: 'tr'},
                ],
                [
                    { text: '🇺🇦 Украинский', callback_data: 'uk'},
                    { text: '🇰🇿 Казахский', callback_data: 'kk'}
                ],
                [
                    { text: '🇮🇩 Индонезийский', callback_data: 'id'},
                    { text: '🇮🇷 Персидский', callback_data: 'fa'},
                ],
                [                         
                    { text: '🇹🇯 Таджикский', callback_data: 'tg'},
                    { text: '🇵🇰 Урду', callback_data: 'ur'},
                ],
                [
                    { text: '🇮🇳 Хинди', callback_data: 'hi'},
                    { text: '🇫🇷 Французский', callback_data: 'fr'},
                ],
                [
                    { text: '🇩🇪 Немецкий', callback_data: 'de'},
                    { text: '🇰🇷 Корейский', callback_data: 'ko'},
                ]
            ]
        }
    }
    )
})

to.action(['us', 'ru','uz', 'zh', 'ar','tr' ,'uk' ,'kk' ,'id' , 'fa','tg' ,'ur' ,'hi' ,'fr' ,'de' , 'ko' ], (ctx)=>{
    var langCode = ctx.match[0]
    switch(langCode){
        case 'us': 
            ctx.reply('Язык вывода - Английский')
            break
        case 'ru': 
            ctx.reply('Язык вывода - Русский')
            break
        case 'uz': 
            ctx.reply('Язык вывода - Узбекский')
            break
        case 'zh': 
            ctx.reply('Язык вывода - Китайский')
            break
        case 'ar': 
            ctx.reply('Язык вывода - Арабский')
            break
        case 'tr': 
            ctx.reply('Язык вывода - Турецкий')
            break
        case 'uk': 
            ctx.reply('Язык вывода - Украинский')
            break
        case 'kk': 
            ctx.reply('Язык вывода - Казахский')
            break
        case 'id': 
            ctx.reply('Язык вывода - Индонезийский')
            break
        case 'fa': 
            ctx.reply('Язык вывода - Персидский')
            break
        case 'tg': 
            ctx.reply('Язык вывода - Таджикский')
            break
        case 'ur': 
            ctx.reply('Язык вывода - Урду')
            break
        case 'hi': 
            ctx.reply('Язык вывода - Хинди')
            break
        case 'fr': 
            ctx.reply('Язык вывода - Французский')
            break
        case 'de': 
            ctx.reply('Язык вывода - Немецкий')
            break
        case 'ko': 
            ctx.reply('Язык вывода - Корейский')
            break
        
    }
    return ctx.scene.leave()
})

module.exports = to