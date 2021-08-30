const letters = `A-Za-z`;
const dal = `\\d${letters}`;// Digits and letters
const partUserInfo = `(?<userinfo>(?<username>.+?)(?::(?<password>.+?))?)@`;
const partHost = ``;
const partPort = `:(?<port>0|[1-9]\\d*?)`;
const partAuthority = `\\/\\/(?<authority>(?:${partUserInfo})?${partHost}(?:${partPort})?)`;
const partScheme = `(?<scheme>[${letters}][${dal}+.-]*?):`;
const partQuery = `\\?(?<query>.*?=.*?(?:&.*?=.*?)*?|.*?=.*?(?:;.*?=.*?)*?)`;
const partFragment = `#(?<fragment>.+?)`;
const partPath = `(?<path>)`;
const full = `${partScheme}(?:${partAuthority})?${partPath}(?:${partQuery})?(?:${partFragment})?`;
