const charAlphanumeric = `[\\dA-Za-z]`;
const charHex = `[\\dA-Fa-f]`;
const charSymbolEmail = `[!#$%&'*+/=?^_\`{|}~-]`;
const numDNoZeroLead = `(?:0|[1-9]\\d*)`;
const numDNoZeroLead0_255 = `(?:2(?:5[0-5]|[0-4]\\d)|1\\d{2}|[1-9]\\d|\\d)`;
const numHAdectet = `${charHex}{1,4}`;
const patternPartIPV4 = `${numDNoZeroLead0_255}(?:\\.${numDNoZeroLead0_255}){3}`;
const patternPartIPV6 = `(?:(?:(?:${numHAdectet}:){7}(?:${numHAdectet}|:)|(?:${numHAdectet}:){6}(?:${patternPartIPV4}|:${numHAdectet}|:)|(?:${numHAdectet}:){5}(?::${patternPartIPV4}|(?::${numHAdectet}){1,2}|:)|(?:${numHAdectet}:){4}(?:(?::${numHAdectet}){0,1}:${patternPartIPV4}|(?::${numHAdectet}){1,3}|:)|(?:${numHAdectet}:){3}(?:(?::${numHAdectet}){0,2}:${patternPartIPV4}|(?::${numHAdectet}){1,4}|:)|(?:${numHAdectet}:){2}(?:(?::${numHAdectet}){0,3}:${patternPartIPV4}|(?::${numHAdectet}){1,5}|:)|(?:${numHAdectet}:){1}(?:(?::${numHAdectet}){0,4}:${patternPartIPV4}|(?::${numHAdectet}){1,6}|:)|(?::(?:(?::${numHAdectet}){0,5}:${patternPartIPV4}|(?::${numHAdectet}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?)`;
const patternPartEmail = `(?:(?:${charAlphanumeric}|${charSymbolEmail})(?:\\.?(?:${charAlphanumeric}|${charSymbolEmail})){0,63})@(?:${charAlphanumeric}(?:[.-]?${charAlphanumeric}){0,254}|\\[${patternPartIPV4}\\]|\\[IPv6:${patternPartIPV6}\\])`;
const patternMap = new Map([
	[
		/^big-?int(?:eger)?-?(?:num(?:ber)?)?$/giu,
		new RegExp(`^-?${numDNoZeroLead}n$`, "gu")
	],
	[
		/^colou?r-?hex$/giu,
		new RegExp(`^#?(?:${charHex}{3}|${charHex}{6})$`, "gu")
	],
	[
		/^colou?r-?rgb$/giu,
		new RegExp(`^rgb\\( ?(?<red>${numDNoZeroLead0_255}) ?, ?(?<green>${numDNoZeroLead0_255}) ?, ?(?<blue>${numDNoZeroLead0_255}) ?\\)$`, "gu")
	],
	[
		/^e(?:lectronic)?-?mail$/giu,
		new RegExp(`^${patternPartEmail}$`, "gu")
	],
	[
		/^g(?:it)?h(?:ub)?-?r(?:epo(?:sitory)?)?$/giu,
		new RegExp(`(?:${charAlphanumeric}|[-_]){1,32}\\/(?:${charAlphanumeric}|[-_.]){1,100}`, "gu")
	],
	[
		/^ip$/giu,
		new RegExp(`^(?:${patternPartIPV4}|${patternPartIPV6})$`, "gu")
	],
	[
		/^ipv4$/giu,
		new RegExp(`^${patternPartIPV4}$`, "gu")
	],
	[
		/^ipv6$/giu,
		new RegExp(`^${patternPartIPV6}$`, "gu")
	],
	[
		/^num(?:ber)?$/giu,
		new RegExp(`^-?${numDNoZeroLead}(?:\\.\\d+)?(?:e-?[1-9]\\d*)?$`, "gu")
	],
	[
		/^sem(?:antic)?-?ver(?:sion(?:ing)?)?$/giu,
		new RegExp(`^${numDNoZeroLead}\\.${numDNoZeroLead}\\.${numDNoZeroLead}(?:-(?:${charAlphanumeric}(?:${charAlphanumeric}|-)*(?:\\.${charAlphanumeric}(?:${charAlphanumeric}|-)*)*))?(?:\\+(?:${charAlphanumeric}(?:${charAlphanumeric}|-)*(?:\\.${charAlphanumeric}(?:${charAlphanumeric}|-)*)*))?$`, "gu")
	]
]);
module.exports = patternMap;
