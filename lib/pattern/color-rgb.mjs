/**
 * @function colorRGB
 * @param {boolean} [groupNaming=false]
 * @returns {string}
 */
function colorRGB(groupNaming = false) {
	if (typeof groupNaming !== "boolean") {
		throw new TypeError(`Argument \`groupNaming\` must be type of boolean!`);
	};
	let setDigits = `(?:2(?:5[0-5]|[0-4]\\d)|1\\d{2}|[1-9]\\d?)`;
	let partBlue = `(?${(groupNaming === true) ? "<blue>" : ":"}${setDigits})`;
	let partGreen = `(?${(groupNaming === true) ? "<green>" : ":"}${setDigits})`;
	let partRed = `(?${(groupNaming === true) ? "<red>" : ":"}${setDigits})`;
	return `(?:rgb\\( ?${partRed} ?, ?${partGreen} ?, ?${partBlue} ?\\))`;
};
export default colorRGB;
