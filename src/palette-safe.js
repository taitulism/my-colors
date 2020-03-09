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
    colors,
    createColor (fgColor, bgColor, modifier) {
        const fg = parseColor(fgColor, true);
        const bg = parseColor(bgColor, false);
        const mod = parseModifier(modifier);

        return function colorize (txt) {
            const coloredText = mod + fg + bg + txt + COLOR_RESET;
            return coloredText;
        };
    }
}

module.exports = palette;
