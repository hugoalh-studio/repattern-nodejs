/**
 * @function semver
 * @param {boolean} [groupNaming=false]
 * @returns {string}
 */
function semver(groupNaming = false) {
	if (typeof groupNaming !== "boolean") {
		throw new TypeError(`Argument \`groupNaming\` must be type of boolean!`);
	};
	let setAlphanumeric = `[\\dA-Za-z-]`;
	let setNumeric = `(?:0|[1-9]\\d*)`;
	let partMajor = `(?${(groupNaming === true) ? "<major>" : ":"}${setNumeric})`;
	let partMinor = `(?${(groupNaming === true) ? "<minor>" : ":"}${setNumeric})`;
	let partPatch = `(?${(groupNaming === true) ? "<patch>" : ":"}${setNumeric})`;
	let partPreRelease = `-(?${(groupNaming === true) ? "<prerelease>" : ":"}${setAlphanumeric}+(?:\\.${setAlphanumeric}+)*)`;
	let partBuild = `\\+(?${(groupNaming === true) ? "<build>" : ":"}${setAlphanumeric}+(?:\\.${setAlphanumeric}+)*)`;
	return `(?:${partMajor}\\.${partMinor}\\.${partPatch}(?:${partPreRelease})?(?:${partBuild})?)`;
};
module.exports = semver;
