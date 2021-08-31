const ipv4 = require("./ipv4.js")();
/**
 * @function ipv6
 * @returns {string}
 */
function ipv6() {
	let setHexadectets = `[\\dA-Fa-f]{1,4}`;
	return `(?:(?:(?:${setHexadectets}:){7}(?:${setHexadectets}|:)|(?:${setHexadectets}:){6}(?:${ipv4}|:${setHexadectets}|:)|(?:${setHexadectets}:){5}(?::${ipv4}|(?::${setHexadectets}){1,2}|:)|(?:${setHexadectets}:){4}(?:(?::${setHexadectets}){0,1}:${ipv4}|(?::${setHexadectets}){1,3}|:)|(?:${setHexadectets}:){3}(?:(?::${setHexadectets}){0,2}:${ipv4}|(?::${setHexadectets}){1,4}|:)|(?:${setHexadectets}:){2}(?:(?::${setHexadectets}){0,3}:${ipv4}|(?::${setHexadectets}){1,5}|:)|(?:${setHexadectets}:){1}(?:(?::${setHexadectets}){0,4}:${ipv4}|(?::${setHexadectets}){1,6}|:)|(?::(?:(?::${setHexadectets}){0,5}:${ipv4}|(?::${setHexadectets}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?)`;
};
module.exports = ipv6;
