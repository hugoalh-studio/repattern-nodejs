// $<Legend>$
//   char: Character
//   d: Digit (Number)
//   f: Float (Number)
//   h: Hex (Number)
//   i: Integer (Number)
//   num: Number
//   part: Part
//   per: Percentage
const charAlphanumeric = `[\\dA-Za-z]`;
const charHex = `[\\dA-Fa-f]`;
const charSymbolEmail = `[!#$%&'*+/=?^_\`{|}~-]`;
const numDF0_1 = `(?:[0-1](?:\\.0+)?|0\\.\\d+)`;
const numDINoZeroLead = `(?:0|[1-9]\\d*)`;
const numDINoZeroLead0_99 = `(?:[1-9]\\d|\\d)`;
const numDINoZeroLead0_100 = `(?:100|[1-9]\\d|\\d)`;
const numDINoZeroLead0_255 = `(?:2(?:5[0-5]|[0-4]\\d)|1\\d{2}|[1-9]\\d|\\d)`;
const numDINoZeroLead0_360 = `(?:3(?:60|[0-5]\\d)|[1-2]\\d{2}|[1-9]\\d|\\d)`;
const numHAdectet = `${charHex}{1,4}`;
const perF = `(?:100|${numDINoZeroLead0_99}(?:\\.\\d+)?)%`;
const perI = `${numDINoZeroLead0_100}%`;
const partIPV4 = `${numDINoZeroLead0_255}(?:\\.${numDINoZeroLead0_255}){3}`;
const partIPV6 = `(?:(?:(?:${numHAdectet}:){7}(?:${numHAdectet}|:)|(?:${numHAdectet}:){6}(?:${partIPV4}|:${numHAdectet}|:)|(?:${numHAdectet}:){5}(?::${partIPV4}|(?::${numHAdectet}){1,2}|:)|(?:${numHAdectet}:){4}(?:(?::${numHAdectet}){0,1}:${partIPV4}|(?::${numHAdectet}){1,3}|:)|(?:${numHAdectet}:){3}(?:(?::${numHAdectet}){0,2}:${partIPV4}|(?::${numHAdectet}){1,4}|:)|(?:${numHAdectet}:){2}(?:(?::${numHAdectet}){0,3}:${partIPV4}|(?::${numHAdectet}){1,5}|:)|(?:${numHAdectet}:){1}(?:(?::${numHAdectet}){0,4}:${partIPV4}|(?::${numHAdectet}){1,6}|:)|(?::(?:(?::${numHAdectet}){0,5}:${partIPV4}|(?::${numHAdectet}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?)`;
const partEmail = `(?:(?:${charAlphanumeric}|${charSymbolEmail})(?:\\.?(?:${charAlphanumeric}|${charSymbolEmail})){0,63})@(?:${charAlphanumeric}(?:[.-]?${charAlphanumeric}){0,254}|\\[${partIPV4}\\]|\\[IPv6:${partIPV6}\\])`;
const partColourAlpha = `, ?(?<alpha>${numDF0_1}) ?`;
const partColourHSL = ` ?(?<hue>${numDINoZeroLead0_360}) ?, ?(?<saturation>${perF}) ?, ?(?<lightness>${perF}) ?`;
const partColourRGB = ` ?(?<red>${numDINoZeroLead0_255}) ?, ?(?<green>${numDINoZeroLead0_255}) ?, ?(?<blue>${numDINoZeroLead0_255}) ?`;
const remap = {
	"big-?int(?:eger)?-?(?:num(?:ber)?)?": `-?${numDINoZeroLead}n`,
	"colou?r-?hex": `#?(?:${charHex}{3}|${charHex}{6})`,
	"colou?r-?hsl": `hsl\\(${partColourHSL}\\)`,
	"colou?r-?hsla": `hsla\\(${partColourHSL}${partColourAlpha}\\)`,
	"colou?r-?rgb": `rgb\\(${partColourRGB}\\)`,
	"colou?r-?rgba": `rgba\\(${partColourRGB}${partColourAlpha}\\)`,
	"e(?:lectronic)?-?mail": partEmail,
	"g(?:it)?h(?:ub)?-?r(?:epo(?:sitory)?)?": `(?:${charAlphanumeric}|[-_]){1,32}\\/(?:${charAlphanumeric}|[-_.]){1,100}`,
	"ip": `(?:${partIPV4}|${partIPV6})`,
	"ipv4": `${partIPV4}`,
	"ipv6": `${partIPV6}`,
	"num(?:ber)?": `-?${numDINoZeroLead}(?:\\.\\d+)?(?:e-?[1-9]\\d*)?`,
	"(?:she|hash)-?bang": "^#! *(?<command>.*)\r?\n",
	"sem(?:antic)?-?ver(?:sion(?:ing)?)?": `v?(?<major>${numDINoZeroLead})\\.(?<minor>${numDINoZeroLead})\\.(?<patch>${numDINoZeroLead})(?:-(?<prerelease>${charAlphanumeric}(?:${charAlphanumeric}|-)*${charAlphanumeric}?(?:\\.${charAlphanumeric}(?:${charAlphanumeric}|-)*${charAlphanumeric}?)*))?(?:\\+(?<build>${charAlphanumeric}(?:${charAlphanumeric}|-)*${charAlphanumeric}?(?:\\.${charAlphanumeric}(?:${charAlphanumeric}|-)*${charAlphanumeric}?)*))?`
};
export default remap;
