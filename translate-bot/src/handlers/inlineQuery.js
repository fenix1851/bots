const translate = require("../services/translate");

module.exports = () => async (ctx) => {
    if (!ctx.inlineQuery.query) return;

    try {
        const result = await translate(
            ctx.inlineQuery.query,
            ctx.session.from,
            ctx.session.to
        );

        return ctx.answerInlineQuery([
            {
                type: "article",
                id: ctx.inlineQuery.id,
                title: result.data.text[0],
                description: `${ctx.session.from} -> ${ctx.session.to}`,
                input_message_content: {
                    message_text: result.data.text[0],
                },
            },
        ]);
    } catch (e) {
        return ctx.answerInlineQuery([
            {
                type: "article",
                id: ctx.inlineQuery.id,
                title: "Some Error",
                description: JSON.stringify(e),
            },
        ]);
    }
};
