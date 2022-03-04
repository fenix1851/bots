const axios = require("axios");
const BASE_URL = `https://translate.yandex.net/api/v1.5/tr.json/translate`;

const { YANDEX_API_KEY } = process.env;
module.exports = async (text, from, to) => {
    if (!from || !to) return;
    return axios.get(BASE_URL, {
        params: {
            key: YANDEX_API_KEY,
            text,
            lang: `${from}-${to}`,
        },
    });
};
