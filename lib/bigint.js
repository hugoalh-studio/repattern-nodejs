/**
 * @function bigint
 * @returns {string}
 */
function bigint() {
	return `(?:-?(?:0|[1-9]\\d*)n?)`;
};
module.exports = bigint;
