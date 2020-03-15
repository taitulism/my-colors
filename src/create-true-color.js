const FG_RGB = '38;2;';
const BG_RGB = '48;2;';

function parseTrueColor (color, isForeground) {
	if (color[0] === '#') {
		color = hex2rgb(color);
	}

	return parseRgbColor(color, isForeground);
}

function parseRgbColor (RGBColor, isForeground) {
	const rgbStr = RGBColor.join(';');
	const prefix = isForeground ? FG_RGB : BG_RGB;

	return prefix + rgbStr;
}

function hex2rgb (hex) {
	hex = hex.substr(1);

	const num = parseInt(hex, 16);
	const R = (num >> 16) & 0xFF;
	const G = (num >> 8) & 0xFF;
	const B = num & 0xFF;

	return [R, G, B];
}
module.exports = parseTrueColor;
