const ESC_CHAR = '\u001B';
const START = ESC_CHAR + '[';
const END = 'm';
const COLOR_RESET = ESC_CHAR + '[0m';
const FG = 30;
const BG = 40;
const FG_256 = '38;5;';
const BG_256 = '48;5;';
const FG_RGB = '38;2;';
const BG_RGB = '48;2;';

module.exports = {
	ESC_CHAR,
	START,
	END,
	COLOR_RESET,
	FG,
	BG,
	FG_256,
	BG_256,
	FG_RGB,
	BG_RGB,
};
