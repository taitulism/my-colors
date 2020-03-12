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

const BLACK = START + 30 + END;
const RED = START + 31 + END;
const GREEN = START + 32 + END;
const YELLOW = START + 33 + END;
const BLUE = START + 34 + END;
const MAGENTA = START + 35 + END;
const CYAN = START + 36 + END;
const WHITE = START + 37 + END;

const BOLD_BLACK = START + '30;1' + END;
const BOLD_RED = START + '31;1' + END;
const BOLD_GREEN = START + '32;1' + END;
const BOLD_YELLOW = START + '33;1' + END;
const BOLD_BLUE = START + '34;1' + END;
const BOLD_MAGENTA = START + '35;1' + END;
const BOLD_CYAN = START + '36;1' + END;
const BOLD_WHITE = START + '37;1' + END;


const emptyStrings = item => item !== '';

const palette = {
	colors: {
		black: txt => BLACK + txt + COLOR_RESET,
		red: txt => RED + txt + COLOR_RESET,
		green: txt => GREEN + txt + COLOR_RESET,
		yellow: txt => YELLOW + txt + COLOR_RESET,
		blue: txt => BLUE + txt + COLOR_RESET,
		magenta: txt => MAGENTA + txt + COLOR_RESET,
		cyan: txt => CYAN + txt + COLOR_RESET,
		white: txt => WHITE + txt + COLOR_RESET,
		bold: {
			black: txt => BOLD_BLACK + txt + COLOR_RESET,
			red: txt => BOLD_RED + txt + COLOR_RESET,
			green: txt => BOLD_GREEN + txt + COLOR_RESET,
			yellow: txt => BOLD_YELLOW + txt + COLOR_RESET,
			blue: txt => BOLD_BLUE + txt + COLOR_RESET,
			magenta: txt => BOLD_MAGENTA + txt + COLOR_RESET,
			cyan: txt => BOLD_CYAN + txt + COLOR_RESET,
			white: txt => BOLD_WHITE + txt + COLOR_RESET,
		},
	},
	createColor (fgColorName, bgColorName, modifier) {
		const fg = getColorNumber(fgColorName, true);
		const bg = getColorNumber(bgColorName, false);
		const mod = parseModifier(modifier);

		const color = [fg, bg, mod].filter(emptyStrings).join(';');
		const wrappedColor = START + color + END;

		return function colorize (txt) {
			return wrappedColor + txt + COLOR_RESET;
		};
	},
};

function getColorNumber (colorName, isForeground) {
	if (!colorName) return '';
	colorName = colorName.toLowerCase();

	const baseNumber = color8Map.get(colorName);

	if (baseNumber == null) return parseModifier(colorName);

	return baseNumber + (isForeground ? FG : BG);
}

module.exports = palette;
