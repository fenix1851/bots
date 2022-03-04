const translate = require('../services/translate');

module.exports = () => async (ctx) => {
    ctx.session.to = ctx.session.to || "en";

    if (!ctx.session.from) {
        return ctx.reply(`Please set /from language first`);
    }
    try {
        const result = await translate(
            ctx.message.text,
            ctx.session.from,
            ctx.session.to
        );
        return ctx.reply(result.data.text[0]);
    } catch (e) {
        console.log(e);
        return ctx.reply("Some error");
    }
};
