/* eslint-disable no-console */
const safePalette = require('../src/safe-palette');
const TEXT = 'This is the message';

// const color1 = safePalette.createColor('white', 'blue');
// const color2 = safePalette.createColor('white', 'brightblue');
// const color3 = safePalette.createColor('white', 'brightblue', 'bold');

// const msg1 = color1(TEXT);
// const msg2 = color2(TEXT);
// const msg3 = color3(TEXT);
// const msg4 = safePalette.colors.red(TEXT);

const black   = safePalette.colors.black(TEXT);
const red     = safePalette.colors.red(TEXT);
const green   = safePalette.colors.green(TEXT);
const yellow  = safePalette.colors.yellow(TEXT);
const blue    = safePalette.colors.blue(TEXT);
const magenta = safePalette.colors.magenta(TEXT);
const cyan    = safePalette.colors.cyan(TEXT);
const white   = safePalette.colors.white(TEXT);

const boldBlack   = safePalette.colors.bold.black(TEXT);
const boldRed     = safePalette.colors.bold.red(TEXT);
const boldGreen   = safePalette.colors.bold.green(TEXT);
const boldYellow  = safePalette.colors.bold.yellow(TEXT);
const boldBlue    = safePalette.colors.bold.blue(TEXT);
const boldMagenta = safePalette.colors.bold.magenta(TEXT);
const boldCyan    = safePalette.colors.bold.cyan(TEXT);
const boldWhite   = safePalette.colors.bold.white(TEXT);

console.log(black);
console.log(red);
console.log(green);
console.log(yellow);
console.log(blue);
console.log(magenta);
console.log(cyan);
console.log(white);

console.log(boldBlack);
console.log(boldRed);
console.log(boldGreen);
console.log(boldYellow);
console.log(boldBlue);
console.log(boldMagenta);
console.log(boldCyan);
console.log(boldWhite);
