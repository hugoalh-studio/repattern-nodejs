// $<Note>$ This is in draft!
const ipv4Function = require("./ipv4.js");
const ipv6Function = require("./ipv6.js");
const ipv4 = ipv4Function();
const ipv6 = ipv6Function();
/**
 * @function url
 * @param {boolean} [groupNaming=false]
 * @returns {string}
 */
function url(groupNaming = false) {
	if (typeof groupNaming !== "boolean") {
		throw new TypeError(`Argument \`groupNaming\` must be type of boolean!`);
	};
	let setLetter = `[A-Za-z]`;
	let setAlphanumeric = `(?:\\d|${setLetter})`;
	let setUPE = `[\\dA-Za-z%_.~-]`;// URL Presentage
	let partScheme = `(?:(?${(groupNaming === true) ? "<schema>" : ":"}${setLetter}(?:[+.-]?${setAlphanumeric})*):)`;
	let partUsername = `(?${(groupNaming === true) ? "<username>" : ":"}${setUPE}+)`;
	let partPassword = `(?${(groupNaming === true) ? "<password>" : ":"}${setUPE}+)`;
	let partUserInfo = `(?:(?${(groupNaming === true) ? "<userinfo>" : ":"}${partUsername}(?::${partPassword})?)@)`;

};
module.exports = url;

const partHost = ``;
const partPort = `:(?<port>0|[1-9]\\d*)`;
const partAuthority = `\\/\\/(?<authority>(?:${partUserInfo})?${partHost}(?:${partPort})?)`;
const partQuery = `\\?(?<query>.*=.*(?:&.*=.*)*|.*=.*(?:;.*=.*)*)`;
const partFragment = `#(?<fragment>.+?)`;
const partPath = `(?<path>)`;
const full = `${partScheme}(?:${partAuthority})?${partPath}(?:${partQuery})?(?:${partFragment})?`;
