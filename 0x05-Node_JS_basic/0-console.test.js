const displayMessage = require('./0-console');
const assert = require('assert');
const sinon = require('sinon');

describe('Test for the displayMessage function', () => {
	it('should print the message to the console', () => {
		const message = 'Hello NodeJS!';
		const consoleSpy = sinon.spy(console, 'log');

		displayMessage(message);

		assert(consoleSpy.calledOnceWithExactly(message));
		consoleSpy.restore();
	});
})
