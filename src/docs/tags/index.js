const usersTag = require("./feature/usersTag");
const productsTags = require("./feature/productsTag");

const tags = [...usersTag, ...productsTags];

module.exports = tags;
