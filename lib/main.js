const advancedDetermine = require("@hugoalh/advanced-determine");
const undefinish = require("@hugoalh/undefinish");
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
 * @function $checkCommonOption
 * @param {object} option
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {object}
 */
function $checkCommonOption(option) {
	if (!advancedDetermine.isPlainObject(option, { super: true })) {
		throw new TypeError(`Argument \`option\` must be type of plain object!`);
	};
	option.boundary = undefinish(option.boundary, false);
	if (typeof option.boundary !== "boolean") {
		throw new TypeError(`Argument \`option.boundary\` must be type of boolean!`);
	};
	option.caseInsensitive = undefinish(option.caseInsensitive, false);
	if (typeof option.caseInsensitive !== "boolean") {
		throw new TypeError(`Argument \`option.caseInsensitive\` must be type of boolean!`);
	};
	option.exactly = undefinish(option.exactly, false);
	if (typeof option.exactly !== "boolean") {
		throw new TypeError(`Argument \`option.exactly\` must be type of boolean!`);
	};
	option.global = undefinish(option.global, false);
	if (typeof option.global !== "boolean") {
		throw new TypeError(`Argument \`option.global\` must be type of boolean!`);
	};
	if (option.boundary && option.exactly) {
		throw new ReferenceError(`Flag "boundary" and "exactly" cannot use together!`);
	};
	return option;
};
/**
 * @private
 * @function $flagCommonService
 * @param {string} pattern
 * @param {object} [option={}]
 * @param {boolean} option.boundary
 * @param {boolean} option.caseInsensitive
 * @param {boolean} option.exactly
 * @param {boolean} option.global
 * @returns {RegExp}
 */
function $flagCommonService(pattern, option = {}) {
	let resultFlag = "u";
	let resultPattern = pattern;
	if (option.boundary && !option.exactly) {
		resultPattern = `\\b${pattern}\\b`;
	};
	if (option.caseInsensitive) {
		resultFlag += "i";
	};
	if (option.exactly && !option.boundary) {
		resultPattern = `^${pattern}$`;
	};
	if (option.global) {
		resultFlag += "g";
	};
	return new RegExp(resultPattern, resultFlag);
};
/**
 * @function base64
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @param {boolean} [option.padding]
 * @returns {RegExp}
 */
function base64(option = {}) {
	option = $checkCommonOption(option);
	const characterBase64 = `(?:${characterAlphanumeric}|[+/])`;
	if (typeof option.padding !== "boolean" && typeof option.padding !== "undefined") {
		throw new TypeError(`Argument \`option.padding\` must be type of boolean or undefined!`);
	};
	let partPadding = [];
	if (option.padding === true) {
		partPadding = ["==", "="];
	} else if (option.padding === false) {
		partPadding = ["", ""];
	} else {
		partPadding = ["(?:==)?", "=?"];
	};
	return $flagCommonService(
		`(?:${characterBase64}{4})*(?:${characterBase64}{2}${partPadding[0]}|${characterBase64}{3}${partPadding[1]}|${characterBase64}{4})`,
		option
	);
};
/**
 * @function base64
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function base64URL(option = {}) {
	const characterBase64URL = `(?:${characterAlphanumeric}|[-_])`;
	return $flagCommonService(
		`(?:${characterBase64URL}{4})*(?:${characterBase64URL}{2}(?:==)?|${characterBase64URL}{3}=?|${characterBase64URL}{4})`,
		$checkCommonOption(option)
	);
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
	return $flagCommonService(
		`-?${numberDecimalIntegerNoZeroLead}n`,
		$checkCommonOption(option)
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
	return $flagCommonService(
		`cmyk\\( ?(?<cyan>${numberPercentageFloat}) ?, ?(?<magenta>${numberPercentageFloat}) ?, ?(?<yellow>${numberPercentageFloat}) ?, ?(?<black>${numberPercentageFloat}) ?\\)`,
		$checkCommonOption(option)
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
	return $flagCommonService(
		`#(?:${characterHex}{6}|${characterHex}{3})`,
		$checkCommonOption(option)
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
	return $flagCommonService(
		`#(?:${characterHex}{8}|${characterHex}{4})`,
		$checkCommonOption(option)
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
	return $flagCommonService(
		`hsl\\(${partColourHSL}\\)`,
		$checkCommonOption(option)
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
	return $flagCommonService(
		`hsla\\(${partColourHSL}${partColourAlpha}\\)`,
		$checkCommonOption(option)
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
	return $flagCommonService(
		`hwb\\(${partColourHWB}\\)`,
		$checkCommonOption(option)
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
	return $flagCommonService(
		`hwba\\(${partColourHWB}${partColourAlpha}\\)`,
		$checkCommonOption(option)
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
	return $flagCommonService(
		`ncol\\( ?(?<hue>[BCGMRY](?:\\d{2})?) ?, ?(?<whiteness>${numberPercentageFloat}) ?, ?(?<blackness>${numberPercentageFloat}) ?\\)`,
		$checkCommonOption(option)
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
	return $flagCommonService(
		`rgb\\(${partColourRGB}\\)`,
		$checkCommonOption(option)
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
	return $flagCommonService(
		`rgba\\(${partColourRGB}${partColourAlpha}\\)`,
		$checkCommonOption(option)
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
function email(option = {}) {
	option = $checkCommonOption(option);
	const characterSymbolEmail = `[!#$%&'*+/=?^_\`{|}~-]`;
	const partDomain = `${characterAlphanumeric}(?:[.-]?${characterAlphanumeric}){0,254}`;
	if (!advancedDetermine.isString(option.domain, { pattern: new RegExp(`^${partDomain}$`, "gu") }) && typeof option.domain !== "undefined") {
		throw new TypeError(`Argument \`option.domain\` must be type of string (domain) or undefined!`);
	};
	option.ipv4 = undefinish(option.ipv4, false);
	if (typeof option.ipv4 !== "boolean") {
		throw new TypeError(`Argument \`option.ipv4\` must be type of boolean!`);
	};
	option.ipv6 = undefinish(option.ipv6, false);
	if (typeof option.ipv6 !== "boolean") {
		throw new TypeError(`Argument \`option.ipv6\` must be type of boolean!`);
	};
	return $flagCommonService(
		`(?<local>(?:${characterAlphanumeric}|${characterSymbolEmail})(?:\\.?(?:${characterAlphanumeric}|${characterSymbolEmail})){0,63})@(?<domain>${(typeof option.domain === "string") ? option.domain.replace(/\./gu, "\\.") : partDomain}${(option.ipv4) ? `|\\[${partIPV4}\\]` : ""}${(option.ipv6) ? `|\\[IPv6:${partIPV6}\\]` : ""})`,
		option
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
	return $flagCommonService(
		`(?:${characterAlphanumeric}|[-_]){1,32}\\/(?:${characterAlphanumeric}|[-_.]){1,100}`,
		$checkCommonOption(option)
	);
};
/**
 * @function hash128
 * @alias md2
 * @alias md4
 * @alias md5
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function hash128(option = {}) {
	return $flagCommonService(
		`${characterHex}{32}`,
		$checkCommonOption(option)
	);
};
/**
 * @function hash160
 * @alias sha1
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function hash160(option = {}) {
	return $flagCommonService(
		`${characterHex}{40}`,
		$checkCommonOption(option)
	);
};
/**
 * @function hash224
 * @alias blake2s224
 * @alias blake224
 * @alias sha224
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function hash224(option = {}) {
	return $flagCommonService(
		`${characterHex}{56}`,
		$checkCommonOption(option)
	);
};
/**
 * @function hash256
 * @alias blake2s256
 * @alias blake256
 * @alias sha256
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function hash256(option = {}) {
	return $flagCommonService(
		`${characterHex}{64}`,
		$checkCommonOption(option)
	);
};
/**
 * @function hash384
 * @alias blake2b384
 * @alias blake384
 * @alias sha384
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function hash384(option = {}) {
	return $flagCommonService(
		`${characterHex}{96}`,
		$checkCommonOption(option)
	);
};
/**
 * @function hash512
 * @alias blake2b512
 * @alias blake512
 * @alias sha512
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function hash512(option = {}) {
	return $flagCommonService(
		`${characterHex}{128}`,
		$checkCommonOption(option)
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
	return $flagCommonService(
		`(?:${partIPV4}|${partIPV6})`,
		$checkCommonOption(option)
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
	return $flagCommonService(
		`${partIPV4}`,
		$checkCommonOption(option)
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
	return $flagCommonService(
		`${partIPV6}`,
		$checkCommonOption(option)
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
	const partMACCode = `${characterHex}{2}`;
	return $flagCommonService(
		`${partMACCode}([:-])${partMACCode}(?:\\1${partMACCode}){4}`,
		$checkCommonOption(option)
	);
};
/**
 * @function md6
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function md6(option = {}) {
	return $flagCommonService(
		`${characterHex}{1,128}`,
		$checkCommonOption(option)
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
	return $flagCommonService(
		`-?${numberDecimalIntegerNoZeroLead}(?:\\.\\d+)?(?:e-?[1-9]\\d*)?`,
		$checkCommonOption(option)
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
	return $flagCommonService(
		`\\/(?<source>.+)\\/(?<flag>[dgimsuy]*)`,
		$checkCommonOption(option)
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
	return $flagCommonService(
		`v?(?<major>${numberDecimalIntegerNoZeroLead})\\.(?<minor>${numberDecimalIntegerNoZeroLead})\\.(?<patch>${numberDecimalIntegerNoZeroLead})(?:-(?<prerelease>${characterAlphanumeric}(?:${characterAlphanumeric}|-)*${characterAlphanumeric}?(?:\\.${characterAlphanumeric}(?:${characterAlphanumeric}|-)*${characterAlphanumeric}?)*))?(?:\\+(?<build>${characterAlphanumeric}(?:${characterAlphanumeric}|-)*${characterAlphanumeric}?(?:\\.${characterAlphanumeric}(?:${characterAlphanumeric}|-)*${characterAlphanumeric}?)*))?`,
		$checkCommonOption(option)
	);
};
/**
 * @function shebang
 * @returns {RegExp}
 */
function shebang() {
	return $flagCommonService("^#! *(?<command>.*)(?:\\r?\\n)?");
};
/**
 * @function uuid
 * @param {object} [option={}]
 * @param {boolean} [option.boundary=false]
 * @param {boolean} [option.caseInsensitive=false]
 * @param {boolean} [option.exactly=false]
 * @param {boolean} [option.global=false]
 * @returns {RegExp}
 */
function uuid(option = {}) {
	return $flagCommonService(
		`${characterHex}{8}(?:-${characterHex}{4}){3}-${characterHex}{12}`,
		$checkCommonOption(option)
	);
};
module.exports = {
	base64,
	base64URL,
	bigInteger,
	blake2b384: hash384,
	blake2b512: hash512,
	blake2s224: hash224,
	blake2s256: hash256,
	blake224: hash224,
	blake256: hash256,
	blake384: hash384,
	blake512: hash512,
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
	hash128,
	hash160,
	hash224,
	hash256,
	hash384,
	hash512,
	ip,
	ipv4,
	ipv6,
	macAddress,
	md2: hash128,
	md4: hash128,
	md5: hash128,
	md6,
	number,
	regularExpression,
	semanticVersioning,
	sha1: hash160,
	sha224: hash224,
	sha256: hash256,
	sha384: hash384,
	sha512: hash512,
	shebang,
	uuid
};
