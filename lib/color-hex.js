/**
 * @function colorHex
 * @returns {string}
 */
function colorHex() {
	let setHex = `[\\dA-Fa-f]`;
	return `(?:(?<=#?)(?:${setHex}{3}|${setHex}{6}))`;
};
module.exports = colorHex;
