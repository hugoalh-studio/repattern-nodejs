const characterAlphanumeric = `[\\dA-Za-z]`;
const characterHex = `[\\dA-Fa-f]`;
const characterSymbolEmail = `[!#$%&'*+/=?^_\`{|}~-]`;
const numberDecimalFloat0_1 = `(?:1(?:\\.0+)?|0(?:\\.\\d+)?)`;
const numberDecimalIntegerNoZeroLead = `(?:0|[1-9]\\d*)`;
const numberDecimalIntegerNoZeroLead0_99 = `(?:[1-9]\\d|\\d)`;
const numberDecimalIntegerNoZeroLead0_255 = `(?:2(?:5[0-5]|[0-4]\\d)|1\\d{2}|${numberDecimalIntegerNoZeroLead0_99})`;
const numberDecimalIntegerNoZeroLead0_360 = `(?:3(?:60|[0-5]\\d)|[1-2]\\d{2}|${numberDecimalIntegerNoZeroLead0_99})`;
const numberPercentageFloat = `(?:100(?:\\.0+)?|${numberDecimalIntegerNoZeroLead0_99}(?:\\.\\d+)?)%`;
const partColourAlpha = `, ?(?<alpha>${numberDecimalFloat0_1}) ?`;
const partColourHSL = ` ?(?<hue>${numberDecimalIntegerNoZeroLead0_360}) ?, ?(?<saturation>${numberPercentageFloat}) ?, ?(?<lightness>${numberPercentageFloat}) ?`;
const partColourHWB = ` ?(?<hue>${numberDecimalIntegerNoZeroLead0_360}) ?, ?(?<whiteness>${numberPercentageFloat}) ?, ?(?<blackness>${numberPercentageFloat}) ?`;
const partColourRGB = ` ?(?<red>${numberDecimalIntegerNoZeroLead0_255}) ?, ?(?<green>${numberDecimalIntegerNoZeroLead0_255}) ?, ?(?<blue>${numberDecimalIntegerNoZeroLead0_255}) ?`;
const partHexAdectet = `${characterHex}{1,4}`;
const partIPV4 = `${numberDecimalIntegerNoZeroLead0_255}(?:\\.${numberDecimalIntegerNoZeroLead0_255}){3}`;
const partIPV6 = `(?:(?:(?:${partHexAdectet}:){7}(?:${partHexAdectet}|:)|(?:${partHexAdectet}:){6}(?:${partIPV4}|:${partHexAdectet}|:)|(?:${partHexAdectet}:){5}(?::${partIPV4}|(?::${partHexAdectet}){1,2}|:)|(?:${partHexAdectet}:){4}(?:(?::${partHexAdectet}){0,1}:${partIPV4}|(?::${partHexAdectet}){1,3}|:)|(?:${partHexAdectet}:){3}(?:(?::${partHexAdectet}){0,2}:${partIPV4}|(?::${partHexAdectet}){1,4}|:)|(?:${partHexAdectet}:){2}(?:(?::${partHexAdectet}){0,3}:${partIPV4}|(?::${partHexAdectet}){1,5}|:)|(?:${partHexAdectet}:){1}(?:(?::${partHexAdectet}){0,4}:${partIPV4}|(?::${partHexAdectet}){1,6}|:)|(?::(?:(?::${partHexAdectet}){0,5}:${partIPV4}|(?::${partHexAdectet}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?)`;
const patternList = {
	bigInteger: `-?${numberDecimalIntegerNoZeroLead}n`,
	colourCMYK: `cmyk\\( ?(?<cyan>${numberPercentageFloat}) ?, ?(?<magenta>${numberPercentageFloat}) ?, ?(?<yellow>${numberPercentageFloat}) ?, ?(?<black>${numberPercentageFloat}) ?\\)`,
	colourHex: `#?(?:${characterHex}{6}|${characterHex}{3})`,
	colourHexAlpha: `#?(?:${characterHex}{8}|${characterHex}{4})`,
	colourHSL: `hsl\\(${partColourHSL}\\)`,
	colourHSLA: `hsla\\(${partColourHSL}${partColourAlpha}\\)`,
	colourHWB: `hwb\\(${partColourHWB}\\)`,
	colourHWBA: `hwb\\(${partColourHWB}${partColourAlpha}\\)`,
	colourNCol: `ncol\\( ?(?<hue>[BCGMRY](?:\\d{2})?) ?, ?(?<whiteness>${numberPercentageFloat}) ?, ?(?<blackness>${numberPercentageFloat}) ?\\)`,
	colourRGB: `rgb\\(${partColourRGB}\\)`,
	colourRGBA: `rgba\\(${partColourRGB}${partColourAlpha}\\)`,
	email: `(?:${characterAlphanumeric}|${characterSymbolEmail})(?:\\.?(?:${characterAlphanumeric}|${characterSymbolEmail})){0,63}@(?:${characterAlphanumeric}(?:[.-]?${characterAlphanumeric}){0,254}|\\[${partIPV4}\\]|\\[IPv6:${partIPV6}\\])`,
	githubRepository: `(?:${characterAlphanumeric}|[-_]){1,32}\\/(?:${characterAlphanumeric}|[-_.]){1,100}`,
	ip: `(?:${partIPV4}|${partIPV6})`,
	ipv4: `${partIPV4}`,
	ipv6: `${partIPV6}`,
	macAddress: `${characterHex}{2}(?:(?::${characterHex}{2}){5}|(?:-${characterHex}{2}){5})`,
	number: `-?${numberDecimalIntegerNoZeroLead}(?:\\.\\d+)?(?:e-?[1-9]\\d*)?`,
	regularExpression: `\\/(?<source>.+)\\/(?<flag>[dgimsuy]*)`,
	semanticVersioning: `v?(?<major>${numberDecimalIntegerNoZeroLead})\\.(?<minor>${numberDecimalIntegerNoZeroLead})\\.(?<patch>${numberDecimalIntegerNoZeroLead})(?:-(?<prerelease>${characterAlphanumeric}(?:${characterAlphanumeric}|-)*${characterAlphanumeric}?(?:\\.${characterAlphanumeric}(?:${characterAlphanumeric}|-)*${characterAlphanumeric}?)*))?(?:\\+(?<build>${characterAlphanumeric}(?:${characterAlphanumeric}|-)*${characterAlphanumeric}?(?:\\.${characterAlphanumeric}(?:${characterAlphanumeric}|-)*${characterAlphanumeric}?)*))?`,
	shebang: "^#! *(?<command>.*)(?:\\r?\\n)?"
};
export default patternList;
