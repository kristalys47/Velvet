const jsdom = require("jsdom");
const { JSDOM } = jsdom;
module.exports = JSDOM.fromFile('./ResumeTemplate.html').then((res) => res);