const {emptyStrings, parseModifier} = require('./common');
const {
	START,
	END,
	COLOR_RESET,
} = require('./constants');

const FG_256 = '38;5;';
const BG_256 = '48;5;';

const BLACK = START + 30 + END;
const RED = START + 31 + END;
const GREEN = START + 32 + END;
const YELLOW = START + 33 + END;
const BLUE = START + 34 + END;
const MAGENTA = START + 35 + END;
const CYAN = START + 36 + END;
const WHITE = START + 37 + END;

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

	/*
		transparent 0
		black 16
		red 1, 160, 196
		green 2
		light green 2, 28, 34
		yellow 154, 190, 226
		blue 4, 20, 21
		light blue 12, 27, 33
		pink 5, 200, 201
		turquise 6, 44
		orange 202, 208, 214
		purple 90, 91,
		brown 130
	*/

palette.colors = {
	black: palette.createColor(16),
	darkRed: palette.createColor(124),
	red: palette.createColor(196),
	green: palette.createColor(22),
	lightGreen1: palette.createColor(28),
	lightGreen2: palette.createColor(34),
	yellow: palette.createColor(190),
	blue: palette.createColor(27),
	lightBlue1: palette.createColor(33),
	lightBlue2: palette.createColor(39),
	pink: palette.createColor(199),
	orange: palette.createColor(202),
	lightOrange: palette.createColor(214),
	purple: palette.createColor(91),
	lightPurple: palette.createColor(128),
	brown: palette.createColor(130),
	turquise1: palette.createColor(153),
	turquise2: palette.createColor(44),
	// magenta: txt => MAGENTA + txt + COLOR_RESET,
	// cyan: txt => CYAN + txt + COLOR_RESET,
	white: palette.createColor(255),
};

function parse256Color (color256, isForeground) {
	if (color256 == null) return '';
	if (typeof color256 != 'number' || color256 < 0 || color256 > 255) {
		throw new Error('0-255 ' + color256);
	}
	const prefix = isForeground ? FG_256 : BG_256;

	return prefix + color256;
}

module.exports = palette;
