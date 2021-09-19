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
const remap = {
	"big-?int(?:eger)?-?(?:num(?:ber)?)?": `-?${numberDecimalIntegerNoZeroLead}n`,
	"colou?r-?cmyk": `cmyk\\( ?(?<cyan>${numberPercentageFloat}) ?, ?(?<magenta>${numberPercentageFloat}) ?, ?(?<yellow>${numberPercentageFloat}) ?, ?(?<black>${numberPercentageFloat}) ?\\)`,
	"colou?r-?hex": `#?(?:${characterHex}{6}|${characterHex}{3})`,
	"colou?r-?hexa": `#?(?:${characterHex}{8}|${characterHex}{4})`,
	"colou?r-?hsl": `hsl\\(${partColourHSL}\\)`,
	"colou?r-?hsla": `hsla\\(${partColourHSL}${partColourAlpha}\\)`,
	"colou?r-?hwb": `hwb\\(${partColourHWB}\\)`,
	"colou?r-?hwba": `hwb\\(${partColourHWB}${partColourAlpha}\\)`,
	"colou?r-?ncol": `ncol\\( ?(?<hue>[BCGMRY](?:\\d{2})?) ?, ?(?<whiteness>${numberPercentageFloat}) ?, ?(?<blackness>${numberPercentageFloat}) ?\\)`,
	"colou?r-?rgb": `rgb\\(${partColourRGB}\\)`,
	"colou?r-?rgba": `rgba\\(${partColourRGB}${partColourAlpha}\\)`,
	"e(?:lectronic)?-?mail": `(?:${characterAlphanumeric}|${characterSymbolEmail})(?:\\.?(?:${characterAlphanumeric}|${characterSymbolEmail})){0,63}@(?:${characterAlphanumeric}(?:[.-]?${characterAlphanumeric}){0,254}|\\[${partIPV4}\\]|\\[IPv6:${partIPV6}\\])`,
	"g(?:it)?h(?:ub)?-?r(?:epo(?:sitory)?)?": `(?:${characterAlphanumeric}|[-_]){1,32}\\/(?:${characterAlphanumeric}|[-_.]){1,100}`,
	"ip": `(?:${partIPV4}|${partIPV6})`,
	"ipv4": `${partIPV4}`,
	"ipv6": `${partIPV6}`,
	"mac-?address": `${characterHex}{2}(?:(?::${characterHex}{2}){5}|(?:-${characterHex}{2}){5})`,
	"num(?:ber)?": `-?${numberDecimalIntegerNoZeroLead}(?:\\.\\d+)?(?:e-?[1-9]\\d*)?`,
	"reg(?:ular)?-?ex(?:p(?:ression)?)?": `\\/(?<source>.+)\\/(?<flag>[dgimsuy]*)`,
	"sem(?:antic)?-?ver(?:sion(?:ing)?)?": `v?(?<major>${numberDecimalIntegerNoZeroLead})\\.(?<minor>${numberDecimalIntegerNoZeroLead})\\.(?<patch>${numberDecimalIntegerNoZeroLead})(?:-(?<prerelease>${characterAlphanumeric}(?:${characterAlphanumeric}|-)*${characterAlphanumeric}?(?:\\.${characterAlphanumeric}(?:${characterAlphanumeric}|-)*${characterAlphanumeric}?)*))?(?:\\+(?<build>${characterAlphanumeric}(?:${characterAlphanumeric}|-)*${characterAlphanumeric}?(?:\\.${characterAlphanumeric}(?:${characterAlphanumeric}|-)*${characterAlphanumeric}?)*))?`,
	"(?:she|hash)-?bang": "^#! *(?<command>.*)(?:\\r?\\n)?"
};
module.exports = remap;
