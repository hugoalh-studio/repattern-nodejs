const dal = `\\dA-Za-z`;// Digit and letter
const symbol = `#$%&+=?_~-`;
const partDomain = `(?<domain>[${dal}](?:[.-]?[${dal}]){0,254})`;
const partLocal = `(?<local>(?:[${dal}${symbol}](?:\\.?[${dal}${symbol}])|[${dal}](?:[.${symbol}]?[${dal}])){0,63})`;
const full = `${partLocal}@${partDomain}`;
module.exports = full;
