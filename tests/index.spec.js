const {expect} = require('chai');

const safePaletteTest = require('./safe-color-test');
const palette256Test = require('./256-color-test');
const trueColorPaletteTest = require('./true-color-test');

const createColor = require('../');

describe('node-colors', () => {
	it('returns a colorizer function', () => {
		const colorize = createColor();

		expect(colorize).to.be.a('function');
	});
	describe('Safe Colors', safePaletteTest);
	describe('256 Colors', palette256Test);
	describe('True-Color', trueColorPaletteTest);
});
