/**
 * @function ipv4
 * @returns {string}
 */
function ipv4() {
	let setDigits = `(?:2(?:5[0-5]|[0-4]\\d)|1\\d{2}|[1-9]\\d?)`;
	return `(?:${setDigits}(?:\\.${setDigits}){3})`;
};
export default ipv4;
