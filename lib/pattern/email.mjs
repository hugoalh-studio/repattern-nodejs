import ipv4Function from "./ipv4.mjs";
import ipv6Function from "./ipv6.mjs";
const ipv4 = ipv4Function();
const ipv6 = ipv6Function();
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
export default email;
