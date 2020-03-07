const createColorizer = require('./index');

// const color = createColorizer(null, 'blue');
const color256 = createColorizer('#ff8700', 'underline');
// const colorRgb = createColorizer([250, 77, 77]);

const msg1 = color256('Title');
// const msg2 = colorRgb('This is the message');

console.log(msg1)
// console.log(msg2)