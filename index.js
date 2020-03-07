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
const FG256 = '38;5;';
const BG256 = '48;5;';

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
    ['dim',       2],
    ['underline', 4],
    ['reverse',   7],
]);

function parseColor (colorName, isForeground = true) {
    if (!colorName) return '';
    
    colorName = colorName.toLowerCase();
    
    let isBright = false;

    if (colorName.startsWith(BRIGHT)) {
        colorName = colorName.substr(BRIGHT_LEN);
        isBright = true;
    }

    const baseNumber = color8Map.get(colorName);
    const colorNumber = baseNumber + (isForeground ? 30 : 40);

    const colorStr = String(colorNumber);
    const brightMod = isBright ? BRIGHT_MOD : '';

    return START + colorStr + brightMod + END;
}

function parseModifier (modifier) {
    if (!modifier) return '';

    const modNumber = modifiersMap.get(modifier);
    return START + modNumber + END;
}

function createColor (fgColor, bgColor, modifier) {
    const fg = parseColor(fgColor, true);
    const bg = parseColor(bgColor, false);
    const mod = parseModifier(modifier);

    return function colorize (txt) {
        const coloredText = mod + fg + bg + txt + COLOR_RESET;
        return coloredText;
    };
}

module.exports = createColor;
