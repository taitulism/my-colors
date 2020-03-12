const {
	START,
	FG,
	BG,
	END,
	COLOR_RESET,
} = require('./constants');
const {parseModifier} = require('./common');

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

const palette = {
	createColor (fgColor, bgColor, modifier) {
		const fg = parseColorName(fgColor, true);
		const bg = parseColorName(bgColor, false);
		const mod = parseModifier(modifier);

		const color = [fg, bg, mod].filter(x => (x !== '')).join(';');

		return function colorize (txt) {
			return START + color + END + txt + COLOR_RESET;
		};
	},
};

function parseColorName (colorName, isForeground) {
	if (!colorName) return '';
	colorName = colorName.toLowerCase();

	const baseNumber = color8Map.get(colorName);

	if (baseNumber == null) return parseModifier(colorName);

	return baseNumber + (isForeground ? FG : BG);
}

module.exports = palette;
