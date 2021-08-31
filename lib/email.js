const ip = require("./ip.js")();
/**
 * @function email
 * @param {boolean} [groupNaming=false]
 * @returns {string}
 */
function email(groupNaming = false) {
	if (typeof groupNaming !== "boolean") {
		throw new TypeError(`Argument \`groupNaming\` must be type of boolean!`);
	};
	let alphanumeric = `\\dA-Za-z`;
	let symbol = `!#$%&'*+/=?^_\`{|}~-`;
	let partDomain = `(?${(groupNaming === true) ? "<domain>" : ":"}(?:[${alphanumeric}](?:[.-]?[${alphanumeric}]){0,254}|${ip}))`;
	let partLocal = `(?${(groupNaming === true) ? "<local>" : ":"}[${alphanumeric}${symbol}](?:\\.?[${alphanumeric}${symbol}]){0,63})`;
	return `(?:${partLocal}@${partDomain})`;
};
module.exports = email;
