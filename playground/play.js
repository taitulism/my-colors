const safePalette = require('../src/palette-safe');
const TEXT = 'This is the message';

const color1 = safePalette.createColor('white', 'blue');
const color2 = safePalette.createColor('white', 'brightblue');
const color3 = safePalette.createColor('white', 'brightblue', 'bold');

const msg1 = color1(TEXT);
const msg2 = color2(TEXT);
const msg3 = color2(TEXT);

console.log(msg1);
// console.log(`\u001b[37m\u001b[44m${TEXT}\u001b[0m`);
// console.log(`\u001b[37;44m${TEXT}\u001b[0m`);

console.log(msg2);
// console.log(`\u001b[1;37;44m${TEXT}\u001b[0m`);
// console.log(`\u001b[37;1;44m${TEXT}\u001b[0m`);
// console.log(`\u001b[37;44;1m${TEXT}\u001b[0m`);

console.log(msg3);
