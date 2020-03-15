const {expect} = require('chai');
const createColor = require('../');

const TEXT = 'TEXT';

module.exports = function () {
	it('wraps given string with ansi chars', () => {
		const colorize = createColor(120);
		const colorized = colorize(TEXT);

		expect(colorized).to.equal(`\u001b[38;5;120m${TEXT}\u001b[0m`);
	});

	it('supports 256 foreground colors (0-255)', () => {
		const black  = createColor(0);
		const red    = createColor(160);
		const yellow = createColor(190);
		const white  = createColor(255);

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
		const black  = createColor(15, 0);
		const red    = createColor(15, 160);
		const yellow = createColor(0, 190);
		const white  = createColor(0, 255);

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
		const bold      = createColor(190, 160, 'bold');
		const dim       = createColor(190, 160, 'dim');
		const italic    = createColor(190, 160, 'italic');
		const underline = createColor(190, 160, 'underline');
		const invert    = createColor(190, 160, 'invert');
		const strike    = createColor(190, 160, 'strike');
		const underlineBold = createColor(190, 160, ['bold', 'underline']);

		const bolded     = bold(TEXT);
		const dimmed     = dim(TEXT);
		const italiced   = italic(TEXT);
		const underlined = underline(TEXT);
		const inverted   = invert(TEXT);
		const striked    = strike(TEXT);
		const boldedUnderlined = underlineBold(TEXT);

		expect(bolded).to.equal(`\u001b[38;5;190;48;5;160;1m${TEXT}\u001b[0m`);
		expect(dimmed).to.equal(`\u001b[38;5;190;48;5;160;2m${TEXT}\u001b[0m`);
		expect(italiced).to.equal(`\u001b[38;5;190;48;5;160;3m${TEXT}\u001b[0m`);
		expect(underlined).to.equal(`\u001b[38;5;190;48;5;160;4m${TEXT}\u001b[0m`);
		expect(inverted).to.equal(`\u001b[38;5;190;48;5;160;7m${TEXT}\u001b[0m`);
		expect(striked).to.equal(`\u001b[38;5;190;48;5;160;9m${TEXT}\u001b[0m`);
		expect(boldedUnderlined).to.equal(`\u001b[38;5;190;48;5;160;1;4m${TEXT}\u001b[0m`);
	});

	it('handles cases with no background color', () => {
		const boldRed1 = createColor(190, 'bold');
		const boldRed2 = createColor(190, null, 'bold');

		const bolded1 = boldRed1(TEXT);
		const bolded2 = boldRed2(TEXT);

		expect(bolded1).to.equal(`\u001b[38;5;190;1m${TEXT}\u001b[0m`);
		expect(bolded2).to.equal(`\u001b[38;5;190;1m${TEXT}\u001b[0m`);
	});
};
