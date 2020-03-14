const trueColorPalette = require('../src/true-color-palette');
const {expect} = require('chai');

const TEXT = 'TEXT';

module.exports = function () {
	describe.only('.createColor', () => {
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

			it('supports RGB foreground colors', () => {
				const red  = trueColorPalette.createColor([248, 28, 229]);
				const blue = trueColorPalette.createColor([0, 29, 250]);
				const yellow = trueColorPalette.createColor([237, 250, 0]);

				const redText    = red(TEXT);
				const blueText   = blue(TEXT);
				const yellowText = yellow(TEXT);

				expect(redText).to.equal(`\u001b[38;2;248;28;229m${TEXT}\u001b[0m`);
				expect(blueText).to.equal(`\u001b[38;2;0;29;250m${TEXT}\u001b[0m`);
				expect(yellowText).to.equal(`\u001b[38;2;237;250;0m${TEXT}\u001b[0m`);
			});

			it.only('supports Hex foreground colors', () => {
				const red  = trueColorPalette.createColor('#f81ce5');
				const blue = trueColorPalette.createColor('#001dfa');
				const yellow = trueColorPalette.createColor('#edfa00');

				const redText    = red(TEXT);
				const blueText   = blue(TEXT);
				const yellowText = yellow(TEXT);

				expect(redText).to.equal(`\u001b[38;2;248;28;229m${TEXT}\u001b[0m`);
				expect(blueText).to.equal(`\u001b[38;2;0;29;250m${TEXT}\u001b[0m`);
				expect(yellowText).to.equal(`\u001b[38;2;237;250;0m${TEXT}\u001b[0m`);
			});

			it('supports 256 background colors', () => {
				const black  = trueColorPalette.createColor(15, 0);
				const red    = trueColorPalette.createColor(15, 160);
				const yellow = trueColorPalette.createColor(0, 190);
				const white  = trueColorPalette.createColor(0, 255);

				const blackBgText  = black(TEXT);
				const redBgText    = red(TEXT);
				const yellowBgText = yellow(TEXT);
				const whiteBgText  = white(TEXT);

				expect(blackBgText).to.equal(`\u001b[38;2;15;48;5;0m${TEXT}\u001b[0m`);
				expect(redBgText).to.equal(`\u001b[38;2;15;48;5;160m${TEXT}\u001b[0m`);
				expect(yellowBgText).to.equal(`\u001b[38;2;0;48;5;190m${TEXT}\u001b[0m`);
				expect(whiteBgText).to.equal(`\u001b[38;2;0;48;5;255m${TEXT}\u001b[0m`);
			});

			it('supports modifiers', () => {
				const bold      = trueColorPalette.createColor(190, 160, 'bold');
				const dim       = trueColorPalette.createColor(190, 160, 'dim');
				const italic    = trueColorPalette.createColor(190, 160, 'italic');
				const underline = trueColorPalette.createColor(190, 160, 'underline');
				const invert    = trueColorPalette.createColor(190, 160, 'invert');
				const strike    = trueColorPalette.createColor(190, 160, 'strike');

				const bolded     = bold(TEXT);
				const dimmed     = dim(TEXT);
				const italiced   = italic(TEXT);
				const underlined = underline(TEXT);
				const inverted   = invert(TEXT);
				const striked    = strike(TEXT);

				expect(bolded).to.equal(`\u001b[38;2;190;48;5;160;1m${TEXT}\u001b[0m`);
				expect(dimmed).to.equal(`\u001b[38;2;190;48;5;160;2m${TEXT}\u001b[0m`);
				expect(italiced).to.equal(`\u001b[38;2;190;48;5;160;3m${TEXT}\u001b[0m`);
				expect(underlined).to.equal(`\u001b[38;2;190;48;5;160;4m${TEXT}\u001b[0m`);
				expect(inverted).to.equal(`\u001b[38;2;190;48;5;160;7m${TEXT}\u001b[0m`);
				expect(striked).to.equal(`\u001b[38;2;190;48;5;160;9m${TEXT}\u001b[0m`);
			});
		});
	});
};
