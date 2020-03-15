const {expect} = require('chai');
const createColor = require('../');

const TEXT = 'TEXT';

module.exports = function () {
	it('wraps given string with ansi chars', () => {
		const colorize = createColor('blue');
		const colorized = colorize(TEXT);

		expect(colorized).to.equal(`\u001b[34m${TEXT}\u001b[0m`);
	});

	it('supports 8 base colors', () => {
		const black   = createColor('black');
		const red     = createColor('red');
		const green   = createColor('green');
		const yellow  = createColor('yellow');
		const blue    = createColor('blue');
		const magenta = createColor('magenta');
		const cyan    = createColor('cyan');
		const white   = createColor('white');

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
		const blackBg   = createColor('white', 'black');
		const redBg     = createColor('black', 'red');
		const greenBg   = createColor('black', 'green');
		const yellowBg  = createColor('black', 'yellow');
		const blueBg    = createColor('black', 'blue');
		const magentaBg = createColor('black', 'magenta');
		const cyanBg    = createColor('black', 'cyan');
		const whiteBg   = createColor('black', 'white');

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
		const bold      = createColor('white', 'black', 'bold');
		const dim       = createColor('white', 'red',   'dim');
		const italic    = createColor('white', 'red',   'italic');
		const underline = createColor('white', 'red',   'underline');
		const invert    = createColor('white', 'red',   'invert');
		const strike    = createColor('white', 'red',   'strike');
		const underlineBold = createColor('white', 'red', ['bold', 'underline']);

		const bolded     = bold(TEXT);
		const dimmed     = dim(TEXT);
		const italiced   = italic(TEXT);
		const underlined = underline(TEXT);
		const inverted   = invert(TEXT);
		const striked    = strike(TEXT);
		const boldedUnderlined = underlineBold(TEXT);

		expect(bolded).to.equal(`\u001b[37;40;1m${TEXT}\u001b[0m`);
		expect(dimmed).to.equal(`\u001b[37;41;2m${TEXT}\u001b[0m`);
		expect(italiced).to.equal(`\u001b[37;41;3m${TEXT}\u001b[0m`);
		expect(underlined).to.equal(`\u001b[37;41;4m${TEXT}\u001b[0m`);
		expect(inverted).to.equal(`\u001b[37;41;7m${TEXT}\u001b[0m`);
		expect(striked).to.equal(`\u001b[37;41;9m${TEXT}\u001b[0m`);
		expect(boldedUnderlined).to.equal(`\u001b[37;41;1;4m${TEXT}\u001b[0m`);
	});

	it('handles cases with no background color', () => {
		const boldRed1 = createColor('red', 'bold');
		const boldRed2 = createColor('red', null, 'bold');

		const bolded1 = boldRed1(TEXT);
		const bolded2 = boldRed2(TEXT);

		expect(bolded1).to.equal(`\u001b[31;1m${TEXT}\u001b[0m`);
		expect(bolded2).to.equal(`\u001b[31;1m${TEXT}\u001b[0m`);
	});
};
