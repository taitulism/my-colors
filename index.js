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

function parseColor (color, isForeground = true) {
    if (color == null) return '';

    if (typeof color == 'number') {
        return parse256Color(color, isForeground);
    }
    else if (typeof color == 'string') {
        if (color[0] === '#') {
            color = hex2rgb(color);
            return parseRgbColor(color, isForeground);
        }
        return parseColorName(color, isForeground);
    }
    else if (Array.isArray(color)) {
        return parseRgbColor(color, isForeground);
    }
    else {
        throw new Error('Invalid color argument type', color);
    }
}

function parse256Color (color256, isForeground) {
    const prefix = isForeground ? FG_256 : BG_256;

    return START + prefix + color256 + END;
}

function parseRgbColor (RGBColor, isForeground) {
    const rgbStr = RGBColor.join(';')
    const prefix = isForeground ? FG_RGB : BG_RGB;

    return START + prefix + rgbStr + END;
}

function parseColorName (colorName, isForeground) {
    colorName = colorName.toLowerCase();

    let isBright = false;

    if (colorName.startsWith(BRIGHT)) {
        colorName = colorName.substr(BRIGHT_LEN);
        isBright = true;
    }

    const baseNumber = color8Map.get(colorName);

    if (!baseNumber) {
        return parseModifier(colorName);
    }
    const colorNumber = baseNumber + (isForeground ? 30 : 40);

    const colorStr = String(colorNumber);
    const brightMod = isBright ? BRIGHT_MOD : '';

    return START + colorStr + brightMod + END;
}

function hex2rgb (hex) {
    hex = hex.substr(1);

    const num = parseInt(hex, 16);
    const R = (num >> 16) & 0xFF;
    const G = (num >> 8) & 0xFF;
    const B = num & 0xFF;

    return [R, G, B];
}

function createColorizer (fgColor, bgColor, modifier) {
    const fg = parseColor(fgColor, true);
    const bg = parseColor(bgColor, false);
    const mod = parseModifier(modifier);

    return function colorize (txt) {
        const coloredText = mod + fg + bg + txt + COLOR_RESET;
        return coloredText;
    };
}

module.exports = createColorizer;
