const ESC_CHAR = '\u001B';
const START = ESC_CHAR + '[';
const END = 'm';
const BRIGHT = 'bright';
const BRIGHT_LEN = BRIGHT.length;
const BRIGHT_MOD = ';1';
const BOLD = ESC_CHAR + '[1m';
const DIM = ESC_CHAR + '[2m';
const UNDERLINE = ESC_CHAR + '[4m';
const REVERSED = ESC_CHAR + '[7m';
const COLOR_RESET = ESC_CHAR + '[0m'; // or [39m  (?)
const FG_256 = '38;5;';
const BG_256 = '48;5;';
const FG_RGB = '38;2;';
const BG_RGB = '48;2;';

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

const modifiersMap = new Map([
    ['bold',      1],
//  ['dim',       2],
//  ['italic',    3],
    ['underline', 4],
    ['invert',    7],
//  ['strike',    9],
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

function parseModifier (modifier) {
    if (!modifier) return '';

    const modNumber = modifiersMap.get(modifier);

    if (!modNumber) return '';
    return START + modNumber + END;
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
