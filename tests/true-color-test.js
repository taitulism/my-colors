const {expect} = require('chai');
const {createColor} = require('..');

const TEXT = 'TEXT';

module.exports = function () {
	describe('.createColor', () => {
		it('returns a function', () => {
			const colorize = createColor([248, 28, 229]);

			expect(colorize).to.be.a('function');
		});

		describe('Colorize', () => {
			it('wraps given string with ansi chars', () => {
				const colorize = createColor([248, 28, 229]);
				const colorized = colorize(TEXT);

				expect(colorized).to.equal(`\u001b[38;2;248;28;229m${TEXT}\u001b[0m`);
			});

			it('supports RGB colors', () => {
				const red  = createColor([248, 28, 229]);
				const blue = createColor([0, 29, 250]);
				const yellow = createColor([237, 250, 0]);
				const yellowBg = createColor([0, 0, 0], [237, 250, 0]);

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
				const red  = createColor('#f81ce5');
				const blue = createColor('#001dfa');
				const yellow = createColor('#edfa00');
				const yellowBg = createColor('#000000', '#edfa00');

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
				const bold      = createColor('#001dfa', [237, 250, 0], 'bold');
				const dim       = createColor('#001dfa', [237, 250, 0], 'dim');
				const italic    = createColor('#001dfa', [237, 250, 0], 'italic');
				const underline = createColor('#001dfa', [237, 250, 0], 'underline');
				const invert    = createColor('#001dfa', [237, 250, 0], 'invert');
				const strike    = createColor('#001dfa', [237, 250, 0], 'strike');
				const underlineBold = createColor('#001dfa', [237, 250, 0], ['bold', 'underline']);

				const bolded     = bold(TEXT);
				const dimmed     = dim(TEXT);
				const italiced   = italic(TEXT);
				const underlined = underline(TEXT);
				const inverted   = invert(TEXT);
				const striked    = strike(TEXT);
				const boldedUnderlined = underlineBold(TEXT);

				expect(bolded).to.equal(`\u001b[38;2;0;29;250;48;2;237;250;0;1m${TEXT}\u001b[0m`);
				expect(dimmed).to.equal(`\u001b[38;2;0;29;250;48;2;237;250;0;2m${TEXT}\u001b[0m`);
				expect(italiced).to.equal(`\u001b[38;2;0;29;250;48;2;237;250;0;3m${TEXT}\u001b[0m`);
				expect(underlined).to.equal(`\u001b[38;2;0;29;250;48;2;237;250;0;4m${TEXT}\u001b[0m`);
				expect(inverted).to.equal(`\u001b[38;2;0;29;250;48;2;237;250;0;7m${TEXT}\u001b[0m`);
				expect(striked).to.equal(`\u001b[38;2;0;29;250;48;2;237;250;0;9m${TEXT}\u001b[0m`);
				expect(boldedUnderlined).to.equal(`\u001b[38;2;0;29;250;48;2;237;250;0;1;4m${TEXT}\u001b[0m`);
			});

			it('handles cases with no background color', () => {
				const boldRed1 = createColor('#f81ce5', 'bold');
				const boldRed2 = createColor('#f81ce5', null, 'bold');

				const bolded1 = boldRed1(TEXT);
				const bolded2 = boldRed2(TEXT);

				expect(bolded1).to.equal(`\u001b[38;2;248;28;229;1m${TEXT}\u001b[0m`);
				expect(bolded2).to.equal(`\u001b[38;2;248;28;229;1m${TEXT}\u001b[0m`);
			});
		});
	});
};
