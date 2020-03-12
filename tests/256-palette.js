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
			it.only('wraps given string with ansi chars', () => {
				const colorize = palette256.createColor(120);
				const colorized = colorize(TEXT);

				expect(colorized).to.equal(`\u001b[34m${TEXT}\u001b[0m`);
			});

			it('supports 8 base colors', () => {
				const black   = palette256.createColor('black');
				const red     = palette256.createColor('red');
				const green   = palette256.createColor('green');
				const yellow  = palette256.createColor('yellow');
				const blue    = palette256.createColor('blue');
				const magenta = palette256.createColor('magenta');
				const cyan    = palette256.createColor('cyan');
				const white   = palette256.createColor('white');

				const blackText   = black(TEXT);
				const redText     = red(TEXT);
				const greenText   = green(TEXT);
				const yellowText  = yellow(TEXT);
				const blueText    = blue(TEXT);
				const magentaText = magenta(TEXT);
				const cyanText    = cyan(TEXT);
				const whiteText   = white(TEXT);

				expect(blackText).to.equal(`\u001b[30m${TEXT}\u001b[0m`);
				expect(redText).to.equal(`\u001b[31m${TEXT}\u001b[0m`);
				expect(greenText).to.equal(`\u001b[32m${TEXT}\u001b[0m`);
				expect(yellowText).to.equal(`\u001b[33m${TEXT}\u001b[0m`);
				expect(blueText).to.equal(`\u001b[34m${TEXT}\u001b[0m`);
				expect(magentaText).to.equal(`\u001b[35m${TEXT}\u001b[0m`);
				expect(cyanText).to.equal(`\u001b[36m${TEXT}\u001b[0m`);
				expect(whiteText).to.equal(`\u001b[37m${TEXT}\u001b[0m`);
			});

			it('supports background colors', () => {
				const blackBg   = palette256.createColor('white', 'black');
				const redBg     = palette256.createColor('black', 'red');
				const greenBg   = palette256.createColor('black', 'green');
				const yellowBg  = palette256.createColor('black', 'yellow');
				const blueBg    = palette256.createColor('black', 'blue');
				const magentaBg = palette256.createColor('black', 'magenta');
				const cyanBg    = palette256.createColor('black', 'cyan');
				const whiteBg   = palette256.createColor('black', 'white');

				const blackBgText   = blackBg(TEXT);
				const redBgText     = redBg(TEXT);
				const greenBgText   = greenBg(TEXT);
				const yellowBgText  = yellowBg(TEXT);
				const blueBgText    = blueBg(TEXT);
				const magentaBgText = magentaBg(TEXT);
				const cyanBgText    = cyanBg(TEXT);
				const whiteBgText   = whiteBg(TEXT);

				expect(blackBgText).to.equal(`\u001b[37;40m${TEXT}\u001b[0m`);
				expect(redBgText).to.equal(`\u001b[30;41m${TEXT}\u001b[0m`);
				expect(greenBgText).to.equal(`\u001b[30;42m${TEXT}\u001b[0m`);
				expect(yellowBgText).to.equal(`\u001b[30;43m${TEXT}\u001b[0m`);
				expect(blueBgText).to.equal(`\u001b[30;44m${TEXT}\u001b[0m`);
				expect(magentaBgText).to.equal(`\u001b[30;45m${TEXT}\u001b[0m`);
				expect(cyanBgText).to.equal(`\u001b[30;46m${TEXT}\u001b[0m`);
				expect(whiteBgText).to.equal(`\u001b[30;47m${TEXT}\u001b[0m`);
			});

			it('supports modifiers', () => {
				const bold      = palette256.createColor('white', 'black', 'bold');
				const dim       = palette256.createColor('white', 'red',   'dim');
				const italic    = palette256.createColor('white', 'red',   'italic');
				const underline = palette256.createColor('white', 'red',   'underline');
				const invert    = palette256.createColor('white', 'red',   'invert');
				const strike    = palette256.createColor('white', 'red',   'strike');

				const bolded     = bold(TEXT);
				const dimmed     = dim(TEXT);
				const italiced   = italic(TEXT);
				const underlined = underline(TEXT);
				const inverted   = invert(TEXT);
				const striked    = strike(TEXT);

				expect(bolded).to.equal(`\u001b[37;40;1m${TEXT}\u001b[0m`);
				expect(dimmed).to.equal(`\u001b[37;41;2m${TEXT}\u001b[0m`);
				expect(italiced).to.equal(`\u001b[37;41;3m${TEXT}\u001b[0m`);
				expect(underlined).to.equal(`\u001b[37;41;4m${TEXT}\u001b[0m`);
				expect(inverted).to.equal(`\u001b[37;41;7m${TEXT}\u001b[0m`);
				expect(striked).to.equal(`\u001b[37;41;9m${TEXT}\u001b[0m`);
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
