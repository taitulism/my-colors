const createColorizer = require('./index');

const highlight = createColorizer('yellow', 'blue');
const highlight2 = createColorizer('yellow', 'blue', 'reverse');

const warn = createColorizer('yellow', 'red', 'bold');

// const msg = highlight('wiki wiki pedia');
// const msg2 = highlight2('wiki wiki pedia');
const msg2 = warn('dont!');

// console.log(msg);
// console.log(msg2);
// console.log('reset');

// console.log(warn('Warning:'))
// console.log('Do not do that!')

const warning = createColorizer('yellow', 'red', 'bold');
const msg = warning('Attention: Do not do that.');

console.log(msg)