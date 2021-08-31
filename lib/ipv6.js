const ipv4 = require("./ipv4.js")();
/**
 * @function ipv6
 * @returns {string}
 */
function ipv6() {
	let hexadectets = `[\\dA-Fa-f]{1,4}`;
	return `(?:(?:(?:${hexadectets}:){7}(?:${hexadectets}|:)|(?:${hexadectets}:){6}(?:${ipv4}|:${hexadectets}|:)|(?:${hexadectets}:){5}(?::${ipv4}|(?::${hexadectets}){1,2}|:)|(?:${hexadectets}:){4}(?:(?::${hexadectets}){0,1}:${ipv4}|(?::${hexadectets}){1,3}|:)|(?:${hexadectets}:){3}(?:(?::${hexadectets}){0,2}:${ipv4}|(?::${hexadectets}){1,4}|:)|(?:${hexadectets}:){2}(?:(?::${hexadectets}){0,3}:${ipv4}|(?::${hexadectets}){1,5}|:)|(?:${hexadectets}:){1}(?:(?::${hexadectets}){0,4}:${ipv4}|(?::${hexadectets}){1,6}|:)|(?::(?:(?::${hexadectets}){0,5}:${ipv4}|(?::${hexadectets}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?)`;
};
module.exports = ipv6;
