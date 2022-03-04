module.exports = (bot) => async (ctx)=>{
    bot.telegram.sendMessage(ctx.chat.id, 'Привет! Я бот - переводчик. Чтобы начать - выбери язык ввода.',
    {
        reply_markup : {
            inline_keyboard: [
                [
                    {text: `📤 Язык ввода`, callback_data: 'changeFromLanguage'},
                ]
            ]
        }
    }
    )
}