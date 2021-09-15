import patternMap from "./pattern-map.mjs";
/**
 * @param {string} name
 * @returns {RegExp}
 */
function main(name) {
	if (typeof name !== "string") {
		throw new TypeError(`Argument \`name\` must be type of string!`);
	};
	for (let [key, value] of patternMap) {
		if (name.search(key) === 0) {
			return value;
		};
	};
	throw new Error(`Argument \`name\`'s value is not in the list!`);
};
export default main;
