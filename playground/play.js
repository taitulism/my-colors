const createColorizer = require('../index');
const palette = require('../src/palette');

// const color = createColorizer(null, 'blue');
const color256 = createColorizer(190, 160, 'bold');
// const colorRgb = createColorizer([250, 77, 77]);

const msg1 = color256('Title');
// const msg2 = colorRgb('This is the message');

// console.log(msg1)
// console.log(msg2)

// console.log("\u001b[1;38;5;190;48;5;160mTitle\u001b[0m");



console.log(`\u001b[1;38;2;${palette.blue}mTitle\u001b[0m`);
console.log(`\u001b[1;38;2;${palette.red}mTitle\u001b[0m`);
console.log(`\u001b[1;38;2;${palette.green}mTitle\u001b[0m`);
console.log(`\u001b[1;38;2;${palette.yellow}mTitle\u001b[0m`);


// Possible API
// ------------
const blue = palette.createColor(fgRGB, bgRGB, 'bold')
blue('my text')

palette.blue('my text', 'bold')

