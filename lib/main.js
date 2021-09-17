const patternMap = require("./pattern-map.js");
const patternMapKey = Object.keys(patternMap);
const patternNoTransform = [
	"(?:she|hash)-?bang"
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
	let flagSet = Array.from(new Set(flag.toLowerCase().split("")));
	for (let index = 0; index < patternMapKey.length; index++) {
		let key = patternMapKey[index];
		if (name.search(new RegExp(`^${key}$`, "giu")) === 0) {
			let resultFlag = "u";
			let resultPattern = patternMap[key];
			if (patternNoTransform.includes(key) === false) {
				if (flagSet.includes("e") === true) {
					resultPattern = `^${resultPattern}$`;
				};
				if (flagSet.includes("g") === true) {
					resultFlag = `g${resultFlag}`;
				};
			};
			return new RegExp(resultPattern, resultFlag);
		};
	};
	throw new Error(`Argument \`name\`'s value is not in the list!`);
};
module.exports = main;
