const {emptyStrings, parseModifier} = require('./common');
const {
	START,
	END,
	COLOR_RESET,
	FG_256,
	BG_256,
} = require('./constants');



const palette = {
	createColor (fgColorNumber, bgColorNumber, modifier) {
		const fg = parse256Color(fgColorNumber, true);
		const bg = parse256Color(bgColorNumber, false);
		const mod = parseModifier(modifier);

		const color = [fg, bg, mod].filter(emptyStrings).join(';');
		const wrappedColor = START + color + END;

		return function colorize (txt) {
			return wrappedColor + txt + COLOR_RESET;
		};
	},
};

function parse256Color (color256, isForeground) {
	if (color256 == null) return '';
	if (typeof color256 != 'number' || color256 < 0 || color256 > 255) {
		throw new Error('0-255');
	}
	const prefix = isForeground ? FG_256 : BG_256;

	return prefix + color256;
}

module.exports = palette;
