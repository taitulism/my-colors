const parseTrueColor = require('./src/create-true-color');
const parse256Color = require('./src/create-256-color');
const parseColorName = require('./src/create-safe-color');

const parseModifiers = require('./src/parse-modifiers');
const ESC_CHAR = '\u001B';
const START = ESC_CHAR + '[';
const END = 'm';
const COLOR_RESET = ESC_CHAR + '[0m';

// filter
const emptyStrings = item => item !== '';

function createColor (fgColor, bgColor, modifiers) {
	const fg = parseColor(fgColor, true);
	const bg = parseColor(bgColor, false);
	const mod = parseModifiers(modifiers);

	const color = [fg, bg, mod].filter(emptyStrings).join(';');
	const wrappedColor = START + color + END;

	return function colorize (txt) {
		return wrappedColor + txt + COLOR_RESET;
	};
}

function parseColor (color, isForeground) {
	if (color === false || color == null) return '';

	const colorType = typeof color;

	if (colorType == 'number') {
		return parse256Color(color, isForeground);
	}
	else if (colorType == 'string') {
		if (color[0] === '#') {
			return parseTrueColor(color, isForeground);
		}

		return parseColorName(color, isForeground);
	}
	else if (Array.isArray(color)) {
		return parseTrueColor(color, isForeground);
	}
}

module.exports = createColor;
