let setLetter = `A-Za-z`;
const dal = `\\d${setLetter}`;// Digit and letter
const partUserInfo = `(?<userinfo>(?<username>.+?)(?::(?<password>.+?))?)@`;
const partHost = ``;
const partPort = `:(?<port>0|[1-9]\\d*?)`;
const partAuthority = `\\/\\/(?<authority>(?:${partUserInfo})?${partHost}(?:${partPort})?)`;
const partScheme = `(?<scheme>[${setLetter}][${dal}+.-]*?):`;
const partQuery = `\\?(?<query>.*?=.*?(?:&.*?=.*?)*?|.*?=.*?(?:;.*?=.*?)*?)`;
const partFragment = `#(?<fragment>.+?)`;
const partPath = `(?<path>)`;
const full = `${partScheme}(?:${partAuthority})?${partPath}(?:${partQuery})?(?:${partFragment})?`;
