const { Telegraf, Scenes:  {BaseScene} } = require('telegraf')
require('dotenv').config();

const { BOT_TOKEN } = process.env;
const bot = new Telegraf(BOT_TOKEN)
const from = new BaseScene('from');
from.enter((ctx)=>{
    bot.telegram.sendMessage(ctx.chat.id, 'Язык ввода:',
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

from.action(['us', 'ru','uz', 'zh', 'ar','tr' ,'uk' ,'kk' ,'id' , 'fa','tg' ,'ur' ,'hi' ,'fr' ,'de' , 'ko' ], (ctx)=>{
    var langCode = ctx.match[0]
    switch(langCode){
        case 'us': 
            ctx.reply('Язык ввода - Английский')
            break
        case 'ru': 
            ctx.reply('Язык ввода - Русский')
            break
        case 'uz': 
            ctx.reply('Язык ввода - Узбекский')
            break
        case 'zh': 
            ctx.reply('Язык ввода - Китайский')
            break
        case 'ar': 
            ctx.reply('Язык ввода - Арабский')
            break
        case 'tr': 
            ctx.reply('Язык ввода - Турецкий')
            break
        case 'uk': 
            ctx.reply('Язык ввода - Украинский')
            break
        case 'kk': 
            ctx.reply('Язык ввода - Казахский')
            break
        case 'id': 
            ctx.reply('Язык ввода - Индонезийский')
            break
        case 'fa': 
            ctx.reply('Язык ввода - Персидский')
            break
        case 'tg': 
            ctx.reply('Язык ввода - Таджикский')
            break
        case 'ur': 
            ctx.reply('Язык ввода - Урду')
            break
        case 'hi': 
            ctx.reply('Язык ввода - Хинди')
            break
        case 'fr': 
            ctx.reply('Язык ввода - Французский')
            break
        case 'de': 
            ctx.reply('Язык ввода - Немецкий')
            break
        case 'ko': 
            ctx.reply('Язык ввода - Корейский')
            break
        
    }
    return ctx.scene.leave()
})

module.exports = from