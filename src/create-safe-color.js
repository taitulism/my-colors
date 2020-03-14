const {emptyStrings, parseModifiers} = require('./common');
const {
	START,
	END,
	COLOR_RESET,
} = require('./constants');

const FG = 30;
const BG = 40;
const color8Map = new Map([
	['black',   0],
	['red',     1],
	['green',   2],
	['yellow',  3],
	['blue',    4],
	['magenta', 5],
	['cyan',    6],
	['white',   7],
]);

function createSafeColor (fgColorName, bgColorName, modifier) {
	const fg = getColorNumber(fgColorName, true);
	const bg = getColorNumber(bgColorName, false);
	const mod = parseModifiers(modifier);

	const color = [fg, bg, mod].filter(emptyStrings).join(';');
	const wrappedColor = START + color + END;

	return function colorize (txt) {
		return wrappedColor + txt + COLOR_RESET;
	};
}

function getColorNumber (colorName, isForeground) {
	if (!colorName) return '';
	colorName = colorName.toLowerCase();

	const baseNumber = color8Map.get(colorName);

	if (baseNumber == null) return parseModifiers(colorName);

	return baseNumber + (isForeground ? FG : BG);
}

module.exports = createSafeColor;
