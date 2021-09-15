const patternMap = require("./pattern-map.js");
const patternMapKeys = patternMap.keys();
/**
 * @param {string} name
 * @returns {RegExp}
 */
function main(name) {
	if (typeof name !== "string") {
		throw new TypeError(`Argument \`name\` must be type of string!`);
	};
	for (let index = 0; index < patternMapKeys.length; index++) {
		let key = patternMapKeys[index];
		if (name.search(key) === 0) {
			return patternMap.get(key);
		};
	};
	return undefined;
};
module.exports = main;
