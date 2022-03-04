module.exports = (bot) => async (ctx)=>{
    bot.telegram.sendMessage(ctx.chat.id, `Тут можно поменять настройки перевода и язык бота:`,
    {
        reply_markup : {
            inline_keyboard : [
                [
                    {text: `🇷🇺/🇺🇿 Поменять язык бота/Bot tilini o'zgartirish`, callback_data: 'changeBotLanguage'}
                ],
                [
                    {text: `📤 Изменить язык ввода`, callback_data: 'changeFromLanguage'}
                ]
            ]
        }
    })
}