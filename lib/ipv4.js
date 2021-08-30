const digits = `25[0-5]|2[0-4]\\d|1\\d{2}|[1-9]\\d|\\d`;
const full = `(?:${digits})(?:\\.(?:${digits})){3}`;
module.exports = full;
