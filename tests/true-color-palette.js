const {expect} = require('chai');
const trueColorPalette = require('../src/true-color-palette');

const TEXT = 'TEXT';

module.exports = function () {
	describe('.createColor', () => {
		it('returns a function', () => {
			const colorize = trueColorPalette.createColor([248, 28, 229]);

			expect(colorize).to.be.a('function');
		});

		describe('Colorize', () => {
			it('wraps given string with ansi chars', () => {
				const colorize = trueColorPalette.createColor([248, 28, 229]);
				const colorized = colorize(TEXT);

				expect(colorized).to.equal(`\u001b[38;2;248;28;229m${TEXT}\u001b[0m`);
			});

			it('supports RGB colors', () => {
				const red  = trueColorPalette.createColor([248, 28, 229]);
				const blue = trueColorPalette.createColor([0, 29, 250]);
				const yellow = trueColorPalette.createColor([237, 250, 0]);
				const yellowBg = trueColorPalette.createColor([0, 0, 0], [237, 250, 0]);

				const redText    = red(TEXT);
				const blueText   = blue(TEXT);
				const yellowText = yellow(TEXT);
				const yellowBgText = yellowBg(TEXT);

				expect(redText).to.equal(`\u001b[38;2;248;28;229m${TEXT}\u001b[0m`);
				expect(blueText).to.equal(`\u001b[38;2;0;29;250m${TEXT}\u001b[0m`);
				expect(yellowText).to.equal(`\u001b[38;2;237;250;0m${TEXT}\u001b[0m`);
				expect(yellowBgText).to.equal(`\u001b[38;2;0;0;0;48;2;237;250;0m${TEXT}\u001b[0m`);
			});

			it('supports Hex colors', () => {
				const red  = trueColorPalette.createColor('#f81ce5');
				const blue = trueColorPalette.createColor('#001dfa');
				const yellow = trueColorPalette.createColor('#edfa00');
				const yellowBg = trueColorPalette.createColor('#000000', '#edfa00');

				const redText    = red(TEXT);
				const blueText   = blue(TEXT);
				const yellowText = yellow(TEXT);
				const yellowBgText = yellowBg(TEXT);

				expect(redText).to.equal(`\u001b[38;2;248;28;229m${TEXT}\u001b[0m`);
				expect(blueText).to.equal(`\u001b[38;2;0;29;250m${TEXT}\u001b[0m`);
				expect(yellowText).to.equal(`\u001b[38;2;237;250;0m${TEXT}\u001b[0m`);
				expect(yellowBgText).to.equal(`\u001b[38;2;0;0;0;48;2;237;250;0m${TEXT}\u001b[0m`);
			});

			it('supports modifiers', () => {
				const bold      = trueColorPalette.createColor('#001dfa', [237, 250, 0], 'bold');
				const dim       = trueColorPalette.createColor('#001dfa', [237, 250, 0], 'dim');
				const italic    = trueColorPalette.createColor('#001dfa', [237, 250, 0], 'italic');
				const underline = trueColorPalette.createColor('#001dfa', [237, 250, 0], 'underline');
				const invert    = trueColorPalette.createColor('#001dfa', [237, 250, 0], 'invert');
				const strike    = trueColorPalette.createColor('#001dfa', [237, 250, 0], 'strike');

				const bolded     = bold(TEXT);
				const dimmed     = dim(TEXT);
				const italiced   = italic(TEXT);
				const underlined = underline(TEXT);
				const inverted   = invert(TEXT);
				const striked    = strike(TEXT);

				expect(bolded).to.equal(`\u001b[38;2;0;29;250;48;2;237;250;0;1m${TEXT}\u001b[0m`);
				expect(dimmed).to.equal(`\u001b[38;2;0;29;250;48;2;237;250;0;2m${TEXT}\u001b[0m`);
				expect(italiced).to.equal(`\u001b[38;2;0;29;250;48;2;237;250;0;3m${TEXT}\u001b[0m`);
				expect(underlined).to.equal(`\u001b[38;2;0;29;250;48;2;237;250;0;4m${TEXT}\u001b[0m`);
				expect(inverted).to.equal(`\u001b[38;2;0;29;250;48;2;237;250;0;7m${TEXT}\u001b[0m`);
				expect(striked).to.equal(`\u001b[38;2;0;29;250;48;2;237;250;0;9m${TEXT}\u001b[0m`);
			});
		});
	});
};
