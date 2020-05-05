const jsdom = require("jsdom");
const { JSDOM } = jsdom;
module.exports = JSDOM.fromFile(process.env.template).then((res) => res);