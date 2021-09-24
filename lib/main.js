const advancedDetermine = require("@hugoalh/advanced-determine");
const characterAlphanumeric = `[\\dA-Za-z]`;
const characterHex = `[\\dA-Fa-f]`;
const numberDecimalFloat0_1 = `(?:1(?:\\.0+)?|0(?:\\.\\d+)?)`;
const numberDecimalIntegerNoZeroLead = `(?:0|[1-9]\\d*)`;
const numberDecimalIntegerNoZeroLead0_99 = `(?:[1-9]\\d|\\d)`;
const numberDecimalIntegerNoZeroLead0_255 = `(?:2(?:5[0-5]|[0-4]\\d)|1\\d{2}|${numberDecimalIntegerNoZeroLead0_99})`;
const numberDecimalIntegerNoZeroLead0_360 = `(?:3(?:60|[0-5]\\d)|[1-2]\\d{2}|${numberDecimalIntegerNoZeroLead0_99})`;
const numberPercentageFloat = `(?:100(?:\\.0+)?|${numberDecimalIntegerNoZeroLead0_99}(?:\\.\\d+)?)%`;
const partColourAlpha = `, ?(?<alpha>${numberDecimalFloat0_1}) ?`;
const partColourHSL = ` ?(?<hue>${numberDecimalIntegerNoZeroLead0_360}) ?, ?(?<saturation>${numberPercentageFloat}) ?, ?(?<lightness>${numberPercentageFloat}) ?`;
const partColourHWB = ` ?(?<hue>${numberDecimalIntegerNoZeroLead0_360}) ?, ?(?<whiteness>${numberPercentageFloat}) ?, ?(?<blackness>${numberPercentageFloat}) ?`;
const partColourRGB = ` ?(?<red>${numberDecimalIntegerNoZeroLead0_255}) ?, ?(?<green>${numberDecimalIntegerNoZeroLead0_255}) ?, ?(?<blue>${numberDecimalIntegerNoZeroLead0_255}) ?`;
const partHexAdectet = `${characterHex}{1,4}`;
const partIPV4 = `${numberDecimalIntegerNoZeroLead0_255}(?:\\.${numberDecimalIntegerNoZeroLead0_255}){3}`;
const partIPV6 = `(?:(?:(?:${partHexAdectet}:){7}(?:${partHexAdectet}|:)|(?:${partHexAdectet}:){6}(?:${partIPV4}|:${partHexAdectet}|:)|(?:${partHexAdectet}:){5}(?::${partIPV4}|(?::${partHexAdectet}){1,2}|:)|(?:${partHexAdectet}:){4}(?:(?::${partHexAdectet}){0,1}:${partIPV4}|(?::${partHexAdectet}){1,3}|:)|(?:${partHexAdectet}:){3}(?:(?::${partHexAdectet}){0,2}:${partIPV4}|(?::${partHexAdectet}){1,4}|:)|(?:${partHexAdectet}:){2}(?:(?::${partHexAdectet}){0,3}:${partIPV4}|(?::${partHexAdectet}){1,5}|:)|(?:${partHexAdectet}:){1}(?:(?::${partHexAdectet}){0,4}:${partIPV4}|(?::${partHexAdectet}){1,6}|:)|(?::(?:(?::${partHexAdectet}){0,5}:${partIPV4}|(?::${partHexAdectet}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?)`;
/**
 * @private
 * @function $checkOptionGeneral
 * @param {object} option
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {object}
 */
function $checkOptionGeneral(option) {
	if (advancedDetermine.isObjectPair(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of object pair!`);
	};
	option.boundary = ((typeof option.boundary === "undefined") ? false : option.boundary);
	if (typeof option.boundary !== "boolean") {
		throw new TypeError(`Argument \`option.boundary\` must be type of boolean!`);
	};
	option.caseInsensitive = ((typeof option.caseInsensitive === "undefined") ? false : option.caseInsensitive);
	if (typeof option.caseInsensitive !== "boolean") {
		throw new TypeError(`Argument \`option.caseInsensitive\` must be type of boolean!`);
	};
	option.exactly = ((typeof option.exactly === "undefined") ? false : option.exactly);
	if (typeof option.exactly !== "boolean") {
		throw new TypeError(`Argument \`option.exactly\` must be type of boolean!`);
	};
	option.global = ((typeof option.global === "undefined") ? false : option.global);
	if (typeof option.global !== "boolean") {
		throw new TypeError(`Argument \`option.global\` must be type of boolean!`);
	};
	return option;
};
/**
 * @private
 * @function $flagServiceGeneral
 * @param {string} pattern
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function $flagServiceGeneral(pattern, option = {}) {
	let resultFlag = "u";
	let resultPattern = pattern;
	if (option.boundary === true && option.exactly === false) {
		resultPattern = `^${pattern}(?=\\s+)|(?<=\\s+)${pattern}(?=\\s+)|(?<=\\s+)${pattern}$`;
	};
	if (option.caseInsensitive === true) {
		resultFlag += "i";
	};
	if (option.exactly === true && option.boundary === false) {
		resultPattern = `^${pattern}$`;
	};
	if (option.global === true) {
		resultFlag += "g";
	};
	return new RegExp(resultPattern, resultFlag);
};
/**
 * @function bigInteger
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function bigInteger(option = {}) {
	return $flagServiceGeneral(
		`-?${numberDecimalIntegerNoZeroLead}n`,
		$checkOptionGeneral(option)
	);
};
/**
 * @function colourCMYK
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function colourCMYK(option = {}) {
	return $flagServiceGeneral(
		`cmyk\\( ?(?<cyan>${numberPercentageFloat}) ?, ?(?<magenta>${numberPercentageFloat}) ?, ?(?<yellow>${numberPercentageFloat}) ?, ?(?<black>${numberPercentageFloat}) ?\\)`,
		$checkOptionGeneral(option)
	);
};
/**
 * @function colourHex
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function colourHex(option = {}) {
	return $flagServiceGeneral(
		`#(?:${characterHex}{6}|${characterHex}{3})`,
		$checkOptionGeneral(option)
	);
};
/**
 * @function colourHexAlpha
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function colourHexAlpha(option = {}) {
	return $flagServiceGeneral(
		`#(?:${characterHex}{8}|${characterHex}{4})`,
		$checkOptionGeneral(option)
	);
};
/**
 * @function colourHSL
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function colourHSL(option = {}) {
	return $flagServiceGeneral(
		`hsl\\(${partColourHSL}\\)`,
		$checkOptionGeneral(option)
	);
};
/**
 * @function colourHSLA
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function colourHSLA(option = {}) {
	return $flagServiceGeneral(
		`hsla\\(${partColourHSL}${partColourAlpha}\\)`,
		$checkOptionGeneral(option)
	);
};
/**
 * @function colourHWB
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function colourHWB(option = {}) {
	return $flagServiceGeneral(
		`hwb\\(${partColourHWB}\\)`,
		$checkOptionGeneral(option)
	);
};
/**
 * @function colourHWBA
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function colourHWBA(option = {}) {
	return $flagServiceGeneral(
		`hwb\\(${partColourHWB}${partColourAlpha}\\)`,
		$checkOptionGeneral(option)
	);
};
/**
 * @function colourNCol
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function colourNCol(option = {}) {
	return $flagServiceGeneral(
		`ncol\\( ?(?<hue>[BCGMRY](?:\\d{2})?) ?, ?(?<whiteness>${numberPercentageFloat}) ?, ?(?<blackness>${numberPercentageFloat}) ?\\)`,
		$checkOptionGeneral(option)
	);
};
/**
 * @function colourRGB
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function colourRGB(option = {}) {
	return $flagServiceGeneral(
		`rgb\\(${partColourRGB}\\)`,
		$checkOptionGeneral(option)
	);
};
/**
 * @function colourRGBA
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function colourRGBA(option = {}) {
	return $flagServiceGeneral(
		`rgba\\(${partColourRGB}${partColourAlpha}\\)`,
		$checkOptionGeneral(option)
	);
};
/**
 * @function email
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {string} [option.domain]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @param {boolean} [option.ipv4=false]
 * @param {boolean} [option.ipv6=false]
 * @returns {RegExp}
 */
function email(option) {
	option = $checkOptionGeneral(option);
	const partDomain = `${characterAlphanumeric}(?:[.-]?${characterAlphanumeric}){0,254}`;
	let flagDomain = false;
	if (typeof option.domain === "string" && option.domain.search(new RegExp(`^${partDomain}$`, "gu")) === 0) {
		flagDomain = true;
	} else if (typeof option.domain !== "undefined") {
		throw new TypeError(`Argument \`option.domain\` must be type of string (domain) or undefined!`);
	};
	option.ipv4 = ((typeof option.ipv4 === "undefined") ? false : option.ipv4);
	if (typeof option.ipv4 !== "boolean") {
		throw new TypeError(`Argument \`option.ipv4\` must be type of boolean!`);
	};
	option.ipv6 = ((typeof option.ipv6 === "undefined") ? false : option.ipv6);
	if (typeof option.ipv6 !== "boolean") {
		throw new TypeError(`Argument \`option.ipv6\` must be type of boolean!`);
	};
	const characterSymbolEmail = `[!#$%&'*+/=?^_\`{|}~-]`;
	return $flagServiceGeneral(
		`(?<local>(?:${characterAlphanumeric}|${characterSymbolEmail})(?:\\.?(?:${characterAlphanumeric}|${characterSymbolEmail})){0,63})@(?<domain>${(flagDomain === true) ? option.domain.replace(/\./gu, "\\.") : partDomain}${(option.ipv4 === true) ? `|\\[${partIPV4}\\]` : ""}${(option.ipv6 === true) ? `|\\[IPv6:${partIPV6}\\]` : ""})`,
		$checkOptionGeneral(option)
	);
};
/**
 * @function githubRepository
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function githubRepository(option = {}) {
	return $flagServiceGeneral(
		`(?:${characterAlphanumeric}|[-_]){1,32}\\/(?:${characterAlphanumeric}|[-_.]){1,100}`,
		$checkOptionGeneral(option)
	);
};
/**
 * @function ip
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function ip(option = {}) {
	return $flagServiceGeneral(
		`(?:${partIPV4}|${partIPV6})`,
		$checkOptionGeneral(option)
	);
};
/**
 * @function ipv4
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function ipv4(option = {}) {
	return $flagServiceGeneral(
		`${partIPV4}`,
		$checkOptionGeneral(option)
	);
};
/**
 * @function ipv6
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function ipv6(option = {}) {
	return $flagServiceGeneral(
		`${partIPV6}`,
		$checkOptionGeneral(option)
	);
};
/**
 * @function macAddress
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function macAddress(option = {}) {
	return $flagServiceGeneral(
		`${characterHex}{2}(?:(?::${characterHex}{2}){5}|(?:-${characterHex}{2}){5})`,
		$checkOptionGeneral(option)
	);
};
/**
 * @function number
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function number(option = {}) {
	return $flagServiceGeneral(
		`-?${numberDecimalIntegerNoZeroLead}(?:\\.\\d+)?(?:e-?[1-9]\\d*)?`,
		$checkOptionGeneral(option)
	);
};
/**
 * @function regularExpression
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function regularExpression(option = {}) {
	return $flagServiceGeneral(
		`\\/(?<source>.+)\\/(?<flag>[dgimsuy]*)`,
		$checkOptionGeneral(option)
	);
};
/**
 * @function semanticVersioning
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function semanticVersioning(option = {}) {
	return $flagServiceGeneral(
		`v?(?<major>${numberDecimalIntegerNoZeroLead})\\.(?<minor>${numberDecimalIntegerNoZeroLead})\\.(?<patch>${numberDecimalIntegerNoZeroLead})(?:-(?<prerelease>${characterAlphanumeric}(?:${characterAlphanumeric}|-)*${characterAlphanumeric}?(?:\\.${characterAlphanumeric}(?:${characterAlphanumeric}|-)*${characterAlphanumeric}?)*))?(?:\\+(?<build>${characterAlphanumeric}(?:${characterAlphanumeric}|-)*${characterAlphanumeric}?(?:\\.${characterAlphanumeric}(?:${characterAlphanumeric}|-)*${characterAlphanumeric}?)*))?`,
		$checkOptionGeneral(option)
	);
};
/**
 * @function shebang
 * @returns {RegExp}
 */
function shebang() {
	return $flagServiceGeneral("^#! *(?<command>.*)(?:\\r?\\n)?");
};
module.exports = {
	bigInteger,
	colourCMYK,
	colourHex,
	colourHexAlpha,
	colourHSL,
	colourHSLA,
	colourHWB,
	colourHWBA,
	colourNCol,
	colourRGB,
	colourRGBA,
	email,
	githubRepository,
	ip,
	ipv4,
	ipv6,
	macAddress,
	number,
	regularExpression,
	semanticVersioning,
	shebang
};
