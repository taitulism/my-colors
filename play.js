const createColorizer = require('./index');

// const color = createColorizer(null, 'blue');
const color256 = createColorizer(190, 160, 'bold');
// const colorRgb = createColorizer([250, 77, 77]);

const msg1 = color256('Title');
// const msg2 = colorRgb('This is the message');

console.log(msg1)
// console.log(msg2)

const color256 = createColorizer(190, 160, 'bold');
// console.log("\u001b[1;38;5;190;48;5;160mTitle\u001b[0m");