/**
 * @function githubRepository
 * @param {boolean} [groupNaming=false]
 * @returns {string}
 */
function githubRepository(groupNaming = false) {
	if (typeof groupNaming !== "boolean") {
		throw new TypeError(`Argument \`groupNaming\` must be type of boolean!`);
	};
	let setAlphanumeric = `[\\dA-Za-z]`;
	let setSymbol = `[-_]`;
	let partName = `(?${(groupNaming === true) ? "<name>" : ":"}(?:${setAlphanumeric}|${setSymbol}|\\.){1,100})`;
	let partOwner = `(?${(groupNaming === true) ? "<owner>" : ":"}(?:${setAlphanumeric}|${setSymbol}){1,32})`;
	return `(?:${partOwner}/${partName})`;
};
module.exports = githubRepository;
