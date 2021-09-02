const ipv4Function = require("./ipv4.js");
const ipv6Function = require("./ipv6.js");
const ipv4 = ipv4Function();
const ipv6 = ipv6Function();
/**
 * @function ip
 * @returns {string}
 */
function ip() {
	return `(?:${ipv4}|${ipv6})`;
};
module.exports = ip;
