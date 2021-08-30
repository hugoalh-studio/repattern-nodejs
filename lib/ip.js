const ipv4 = require("./ipv4.js");
const ipv6 = require("./ipv6.js");
const full = `(?:${ipv4})|(?:${ipv6})`;
module.exports = full;
