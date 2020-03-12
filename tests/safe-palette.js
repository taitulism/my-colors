const safePalette = require('../src/palette-safe');
const {expect} = require('chai');

const TEXT = 'TEXT';

module.exports = function () {
	describe('.createColor', () => {
		it('returns a function', () => {
			const colorize = safePalette.createColor();

			expect(colorize).to.be.a('function');
		});

		describe('Colorize', () => {
			it('wraps given string with ansi chars', () => {
				const colorize = safePalette.createColor('blue');
				const colorized = colorize(TEXT);

				expect(colorized).to.equal(`\u001b[34m${TEXT}\u001b[0m`);
			});

			it('supports 8 base colors', () => {
				const black   = safePalette.createColor('black');
				const red     = safePalette.createColor('red');
				const green   = safePalette.createColor('green');
				const yellow  = safePalette.createColor('yellow');
				const blue    = safePalette.createColor('blue');
				const magenta = safePalette.createColor('magenta');
				const cyan    = safePalette.createColor('cyan');
				const white   = safePalette.createColor('white');

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
				const blackBg   = safePalette.createColor('white', 'black');
				const redBg     = safePalette.createColor('black', 'red');
				const greenBg   = safePalette.createColor('black', 'green');
				const yellowBg  = safePalette.createColor('black', 'yellow');
				const blueBg    = safePalette.createColor('black', 'blue');
				const magentaBg = safePalette.createColor('black', 'magenta');
				const cyanBg    = safePalette.createColor('black', 'cyan');
				const whiteBg   = safePalette.createColor('black', 'white');

				const blackBgText   = blackBg(TEXT);
				const redBgText     = redBg(TEXT);
				const greenBgText   = greenBg(TEXT);
				const yellowBgText  = yellowBg(TEXT);
				const blueBgText    = blueBg(TEXT);
				const magentaBgText = magentaBg(TEXT);
				const cyanBgText    = cyanBg(TEXT);
				const whiteBgText   = whiteBg(TEXT);

				expect(blackBgText).to.equal(`\u001b[37m\u001b[40m${TEXT}\u001b[0m`);
				expect(redBgText).to.equal(`\u001b[30m\u001b[41m${TEXT}\u001b[0m`);
				expect(greenBgText).to.equal(`\u001b[30m\u001b[42m${TEXT}\u001b[0m`);
				expect(yellowBgText).to.equal(`\u001b[30m\u001b[43m${TEXT}\u001b[0m`);
				expect(blueBgText).to.equal(`\u001b[30m\u001b[44m${TEXT}\u001b[0m`);
				expect(magentaBgText).to.equal(`\u001b[30m\u001b[45m${TEXT}\u001b[0m`);
				expect(cyanBgText).to.equal(`\u001b[30m\u001b[46m${TEXT}\u001b[0m`);
				expect(whiteBgText).to.equal(`\u001b[30m\u001b[47m${TEXT}\u001b[0m`);
			});

			it('supports modifiers', () => {
				const bold      = safePalette.createColor('white', 'black', 'bold');
				const invert    = safePalette.createColor('black', 'white', 'invert');
				const underline = safePalette.createColor('white', 'red',   'underline');

				const bolded     = bold(TEXT);
				const inverted   = invert(TEXT);
				const underlined = underline(TEXT);

				expect(bolded).to.equal(`\u001b[37m\u001b[40m\u001b[1m${TEXT}\u001b[0m`);
				expect(inverted).to.equal(`\u001b[30m\u001b[47m\u001b[7m${TEXT}\u001b[0m`);
				expect(underlined).to.equal(`\u001b[37m\u001b[41m\u001b[4m${TEXT}\u001b[0m`);
			});
		});
	});
};
