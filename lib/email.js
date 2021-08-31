const ipv4 = require("./ipv4.js")();
const ipv6 = require("./ipv6.js")();
/**
 * @function email
 * @param {boolean} [groupNaming=false]
 * @returns {string}
 */
function email(groupNaming = false) {
	if (typeof groupNaming !== "boolean") {
		throw new TypeError(`Argument \`groupNaming\` must be type of boolean!`);
	};
	let setAlphanumeric = `[\\dA-Za-z]`;
	let setSymbol = `[!#$%&'*+/=?^_\`{|}~-]`;
	let partDomain = `(?${(groupNaming === true) ? "<domain>" : ":"}(?:${setAlphanumeric}(?:[.-]?${setAlphanumeric}){0,254}|\\[${ipv4}\\]|\\[IPv6:${ipv6}\\]))`;
	let partLocal = `(?${(groupNaming === true) ? "<local>" : ":"}(?:${setAlphanumeric}|${setSymbol})(?:\\.?(?:${setAlphanumeric}|${setSymbol})){0,63})`;
	return `(?:${partLocal}@${partDomain})`;
};
module.exports = email;
