import patternList from "./pattern.mjs";
const patternNameMap = {
	bigInteger: "big-?int(?:eger)?-?(?:num(?:ber)?)?",
	colourCMYK: "colou?r-?cmyk",
	colourHex: "colou?r-?hex",
	colourHexAlpha: "colou?r-?hexa",
	colourHSL: "colou?r-?hsl",
	colourHSLA: "colou?r-?hsla",
	colourHWB: "colou?r-?hwb",
	colourHWBA: "colou?r-?hwba",
	colourNCol: "colou?r-?ncol",
	colourRGB: "colou?r-?rgb",
	colourRGBA: "colou?r-?rgba",
	email: "e(?:lectronic)?-?mail",
	githubRepository: "g(?:it)?h(?:ub)?-?r(?:epo(?:sitory)?)?",
	ip: "ip",
	ipv4: "ipv4",
	ipv6: "ipv6",
	macAddress: "mac-?address",
	number: "num(?:ber)?",
	regularExpression: "reg(?:ular)?-?ex(?:p(?:ression)?)?",
	semanticVersioning: "sem(?:antic)?-?ver(?:sion(?:ing)?)?",
	shebang: "(?:she|hash)-?bang"
};
const patternListKey = Object.keys(patternList);
const patternNoFlag = [
	"shebang"
];
/**
 * @param {string} name Pattern name.
 * @param {string} [flag=""] Pattern flag.
 * @returns {RegExp} Regular expression pattern.
 */
function main(name, flag = "") {
	if (typeof name !== "string") {
		throw new TypeError(`Argument \`name\` must be type of string!`);
	};
	if (typeof flag !== "string") {
		throw new TypeError(`Argument \`flag\` must be type of string!`);
	};
	let flagSet = Array.from(new Set(flag.toLowerCase().split("").sort()));
	for (let index = 0; index < patternListKey.length; index++) {
		let key = patternListKey[index];
		if (name.search(new RegExp(`^${patternNameMap[key] || key}$`, "giu")) === 0) {
			let resultFlag = "u";
			let resultPattern = patternList[key];
			if (patternNoFlag.includes(key) === false) {
				if (flagSet.includes("e") === true) {
					resultPattern = `^${resultPattern}$`;
				};
				if (flagSet.includes("g") === true) {
					resultFlag += "g";
				};
				if (flagSet.includes("i") === true) {
					resultFlag += "i";
				};
			};
			return new RegExp(resultPattern, resultFlag);
		};
	};
	throw new Error(`Argument \`name\`'s value is not in the list!`);
};
export default main;
