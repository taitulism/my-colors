const {
    ESC_CHAR,
    START,
    END,
    BRIGHT,
    BRIGHT_LEN,
    BRIGHT_MOD,
    COLOR_RESET,
    FG_256,
    BG_256,
    FG_RGB,
    BG_RGB,
} = require('./constants');

const modifiersMap = new Map([
    ['bold',      1],
//  ['dim',       2],
//  ['italic',    3],
    ['underline', 4],
    ['invert',    7],
//  ['strike',    9],
]);

function parseModifier (modifier) {
    if (!modifier) return '';
    const modNumber = modifiersMap.get(modifier);
    if (!modNumber) return '';

	return START + modNumber + END;
}

module.exports = {
	modifiersMap,
	parseModifier,
};
