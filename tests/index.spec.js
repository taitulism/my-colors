const safePaletteTest = require('./safe-palette');
const palette256Test = require('./256-palette');

describe('node-colors', () => {
	describe('Safe Palette', safePaletteTest);
	describe('256 Colors Palette', palette256Test);
});
