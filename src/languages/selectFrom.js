module.exports = (bot) => async (ctx) => {
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
} 