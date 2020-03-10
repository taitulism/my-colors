const safePalette = require('../src/palette-safe');
const {expect} = require('chai');

module.exports = function () {
	describe('.createColor', () => {
		it('returns a function', () => {
			const colorizer = safePalette.createColor();

			expect(colorizer).to.be.a('function');
		});
	});
};
