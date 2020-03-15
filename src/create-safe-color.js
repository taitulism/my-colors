const parseModifiers = require('./parse-modifiers');

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

function parseColorName (colorName, isForeground) {
	if (!colorName) return '';
	colorName = colorName.toLowerCase();

	const baseNumber = color8Map.get(colorName);

	if (baseNumber == null) return parseModifiers(colorName);

	return baseNumber + (isForeground ? FG : BG);
}

module.exports = parseColorName;
