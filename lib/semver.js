/**
 * @function semver
 * @param {boolean} [groupNaming=false]
 * @returns {string}
 */
function semver(groupNaming = false) {
	if (typeof groupNaming !== "boolean") {
		throw new TypeError(`Argument \`groupNaming\` must be type of boolean!`);
	};
	let alphanumeric = `\\dA-Za-z-`;
	let numeric = `0|[1-9]\\d*`;
	let partMajor = `(?${(groupNaming === true) ? "<major>" : ":"}${numeric})`;
	let partMinor = `(?${(groupNaming === true) ? "<minor>" : ":"}${numeric})`;
	let partPatch = `(?${(groupNaming === true) ? "<patch>" : ":"}${numeric})`;
	let partPreRelease = `-(?${(groupNaming === true) ? "<prerelease>" : ":"}[${alphanumeric}]+(?:\\.[${alphanumeric}]+)*)`;
	let partBuild = `\\+(?${(groupNaming === true) ? "<build>" : ":"}[${alphanumeric}]+(?:\\.[${alphanumeric}]+)*)`;
	return `(?:${partMajor}\\.${partMinor}\\.${partPatch}(?:${partPreRelease})?(?:${partBuild})?)`;
};
module.exports = semver;
