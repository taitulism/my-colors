const createColor = require('./index');

const highlight = createColor('red', 'brightyellow', 'underline');
const warn = createColor('brightyellow', 'brightred');

const msg = highlight('wiki wiki pedia');
const msg2 = warn('DONT!');

console.log(msg);
console.log(msg2);
console.log('reset');