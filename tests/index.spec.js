const safePaletteTest = require('./safe-color-test');
const palette256Test = require('./256-color-test');
const trueColorPaletteTest = require('./true-color-test');

describe('node-colors', () => {
	describe('Safe Palette', safePaletteTest);
	describe('256 Colors Palette', palette256Test);
	describe('True-Color Palette', trueColorPaletteTest);
});
