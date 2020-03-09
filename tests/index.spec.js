const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;

const TPL = require('../');

describe('TPL', () => {
	it('is ok', () => {
		expect(TPL).to.be.ok;
	});
});
