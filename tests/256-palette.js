const palette256 = require('../src/256-palette');
const {expect} = require('chai');

const TEXT = 'TEXT';

module.exports = function () {
	describe.only('.createColor', () => {
		it('returns a function', () => {
			const colorize = palette256.createColor(120);

			expect(colorize).to.be.a('function');
		});

		describe('Colorize', () => {
			it('wraps given string with ansi chars', () => {
				const colorize = palette256.createColor(120);
				const colorized = colorize(TEXT);

				expect(colorized).to.equal(`\u001b[38;5;120m${TEXT}\u001b[0m`);
			});

			it('supports 256 foreground colors (0-255)', () => {
				const black  = palette256.createColor(0);
				const red    = palette256.createColor(160);
				const yellow = palette256.createColor(190);
				const white  = palette256.createColor(255);

				const blackText  = black(TEXT);
				const redText    = red(TEXT);
				const yellowText = yellow(TEXT);
				const whiteText  = white(TEXT);

				expect(blackText).to.equal(`\u001b[38;5;0m${TEXT}\u001b[0m`);
				expect(redText).to.equal(`\u001b[38;5;160m${TEXT}\u001b[0m`);
				expect(yellowText).to.equal(`\u001b[38;5;190m${TEXT}\u001b[0m`);
				expect(whiteText).to.equal(`\u001b[38;5;255m${TEXT}\u001b[0m`);
			});

			it('supports 256 background colors', () => {
				const black  = palette256.createColor(15, 0);
				const red    = palette256.createColor(15, 160);
				const yellow = palette256.createColor(0, 190);
				const white  = palette256.createColor(0, 255);

				const blackBgText  = black(TEXT);
				const redBgText    = red(TEXT);
				const yellowBgText = yellow(TEXT);
				const whiteBgText  = white(TEXT);

				expect(blackBgText).to.equal(`\u001b[38;5;15;48;5;0m${TEXT}\u001b[0m`);
				expect(redBgText).to.equal(`\u001b[38;5;15;48;5;160m${TEXT}\u001b[0m`);
				expect(yellowBgText).to.equal(`\u001b[38;5;0;48;5;190m${TEXT}\u001b[0m`);
				expect(whiteBgText).to.equal(`\u001b[38;5;0;48;5;255m${TEXT}\u001b[0m`);
			});

			it('supports modifiers', () => {
				const bold      = palette256.createColor(190, 160, 'bold');
				const dim       = palette256.createColor(190, 160, 'dim');
				const italic    = palette256.createColor(190, 160, 'italic');
				const underline = palette256.createColor(190, 160, 'underline');
				const invert    = palette256.createColor(190, 160, 'invert');
				const strike    = palette256.createColor(190, 160, 'strike');

				const bolded     = bold(TEXT);
				const dimmed     = dim(TEXT);
				const italiced   = italic(TEXT);
				const underlined = underline(TEXT);
				const inverted   = invert(TEXT);
				const striked    = strike(TEXT);

				expect(bolded).to.equal(`\u001b[38;5;190;48;5;160;1m${TEXT}\u001b[0m`);
				expect(dimmed).to.equal(`\u001b[38;5;190;48;5;160;2m${TEXT}\u001b[0m`);
				expect(italiced).to.equal(`\u001b[38;5;190;48;5;160;3m${TEXT}\u001b[0m`);
				expect(underlined).to.equal(`\u001b[38;5;190;48;5;160;4m${TEXT}\u001b[0m`);
				expect(inverted).to.equal(`\u001b[38;5;190;48;5;160;7m${TEXT}\u001b[0m`);
				expect(striked).to.equal(`\u001b[38;5;190;48;5;160;9m${TEXT}\u001b[0m`);
			});
		});

		describe.skip('Palette Colors', () => {
			it('holds base colors', () => {
				const black   = palette256.colors.black(TEXT);
				const red     = palette256.colors.red(TEXT);
				const green   = palette256.colors.green(TEXT);
				const yellow  = palette256.colors.yellow(TEXT);
				const blue    = palette256.colors.blue(TEXT);
				const magenta = palette256.colors.magenta(TEXT);
				const cyan    = palette256.colors.cyan(TEXT);
				const white   = palette256.colors.white(TEXT);

				expect(black).to.equal(`\u001b[30m${TEXT}\u001b[0m`);
				expect(red).to.equal(`\u001b[31m${TEXT}\u001b[0m`);
				expect(green).to.equal(`\u001b[32m${TEXT}\u001b[0m`);
				expect(yellow).to.equal(`\u001b[33m${TEXT}\u001b[0m`);
				expect(blue).to.equal(`\u001b[34m${TEXT}\u001b[0m`);
				expect(magenta).to.equal(`\u001b[35m${TEXT}\u001b[0m`);
				expect(cyan).to.equal(`\u001b[36m${TEXT}\u001b[0m`);
				expect(white).to.equal(`\u001b[37m${TEXT}\u001b[0m`);
			});

			it('holds bold base colors', () => {
				const black   = palette256.colors.bold.black(TEXT);
				const red     = palette256.colors.bold.red(TEXT);
				const green   = palette256.colors.bold.green(TEXT);
				const yellow  = palette256.colors.bold.yellow(TEXT);
				const blue    = palette256.colors.bold.blue(TEXT);
				const magenta = palette256.colors.bold.magenta(TEXT);
				const cyan    = palette256.colors.bold.cyan(TEXT);
				const white   = palette256.colors.bold.white(TEXT);

				expect(black).to.equal(`\u001b[30;1m${TEXT}\u001b[0m`);
				expect(red).to.equal(`\u001b[31;1m${TEXT}\u001b[0m`);
				expect(green).to.equal(`\u001b[32;1m${TEXT}\u001b[0m`);
				expect(yellow).to.equal(`\u001b[33;1m${TEXT}\u001b[0m`);
				expect(blue).to.equal(`\u001b[34;1m${TEXT}\u001b[0m`);
				expect(magenta).to.equal(`\u001b[35;1m${TEXT}\u001b[0m`);
				expect(cyan).to.equal(`\u001b[36;1m${TEXT}\u001b[0m`);
				expect(white).to.equal(`\u001b[37;1m${TEXT}\u001b[0m`);
			});
		});
	});
};
