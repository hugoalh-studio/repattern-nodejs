import ipv4Function from "./ipv4.mjs";
import ipv6Function from "./ipv6.mjs";
const ipv4 = ipv4Function();
const ipv6 = ipv6Function();
/**
 * @function ip
 * @returns {string}
 */
function ip() {
	return `(?:${ipv4}|${ipv6})`;
};
export default ip;
