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

const colors = {
    blue: '45;73;227',
    red: '227;16;16',
    yellow: '255;251;0',
    green: '32;171;14',
};

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
