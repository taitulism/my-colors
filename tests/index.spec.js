const {expect} = require('chai');

const {parseModifiers} = require('../src/common');
const safePaletteTest = require('./safe-palette');
const palette256Test = require('./256-palette');
const trueColorPaletteTest = require('./true-color-palette');

describe('node-colors', () => {
	describe('Safe Palette', safePaletteTest);
	describe('256 Colors Palette', palette256Test);
	describe('True-Color Palette', trueColorPaletteTest);
	describe('parseModifiers', () => {
		it('handles a modifier string', () => {
			const mod1 = parseModifiers('bold');
			const mod2 = parseModifiers('underline');

			expect(mod1).to.equal('1');
			expect(mod2).to.equal('4');
		});

		it('handles an array of modifiers', () => {
			const mod = parseModifiers(['bold', 'underline']);

			expect(mod).to.equal('1;4');
		});
	});
});
