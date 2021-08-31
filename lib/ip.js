const ipv4 = require("./ipv4.js")();
const ipv6 = require("./ipv6.js")();
/**
 * @function ip
 * @returns {string}
 */
function ip() {
	return `(?:${ipv4}|${ipv6})`;
};
module.exports = ip;
