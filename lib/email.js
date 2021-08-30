const letters = `A-Za-z`;
const symbols = `#$%&+=?_~-`;
const dal = `\\d${letters}`;// Digits and letters
const partDomain = `(?<domain>[${dal}](?:[.-]?[${dal}]){0,254})`;
const partLocal = `(?<local>(?:[${dal}${symbols}](?:\\.?[${dal}${symbols}])|[${dal}](?:[.${symbols}]?[${dal}])){0,63})`;
const full = `${partLocal}@${partDomain}`;
module.exports = full;
