/* eslint-disable max-statements, max-lines-per-function, no-console */
const createColor = require('../');
const TEXT = 'This is the message';

const x = createColor('#000000', [77, 160, 255], ['bold', 'underline']);
const y = createColor('#fff', [77, 160, 255], ['underline']);

console.log(x(TEXT));
console.log(y(TEXT));

// 256 colors
function print256 () {
	const perRow = 12;

	// base colors & bold
	console.log('Base & bright colors:');
	for (let i = 0; i < 16; i += 8) {
		const colorAry = [];

		for (let j = 0; j < 8; j++) {
			const colorNumber = i + j;
			const colorize = createColor(0, colorNumber);
			const colorTxt = colorNumber < 10 ? '  ' + colorNumber : ' ' + colorNumber;
			const msg = colorize(` ${colorTxt} `);

			colorAry.push(msg);
		}
		console.log(colorAry.join(''));
	}

	console.log('\nColors:');
	for (let i = 16; i < 232; i += perRow) {
		const colorAry = [];

		for (let j = 0; j < perRow; j++) {
			const colorNumber = i + j;
			const colorize = createColor(0, colorNumber);
			const colorTxt = colorNumber < 100 ? ' ' + colorNumber : colorNumber;
			const msg = colorize(` ${colorTxt} `);

			colorAry.push(msg);
		}

		console.log(colorAry.join(''));
	}

	console.log('\nBlack & White, Gray Scale');
	for (let i = 232; i < 256; i += perRow) {
		const colorAry = [];

		for (let j = 0; j < perRow; j++) {
			const colorNumber = i + j;
			const fg = i < 244 ? 7 : 0;
			const colorize = createColor(fg, colorNumber);
			const msg = colorize(` ${colorNumber} `);

			colorAry.push(msg);
		}
		console.log(colorAry.join(''));
	}
}

print256();
