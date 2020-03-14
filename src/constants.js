const ESC_CHAR = '\u001B';
const START = ESC_CHAR + '[';
const END = 'm';
const COLOR_RESET = ESC_CHAR + '[0m';

module.exports = {
	ESC_CHAR,
	START,
	END,
	COLOR_RESET,
};
