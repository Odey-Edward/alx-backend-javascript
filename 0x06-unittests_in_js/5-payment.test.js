const { describe, it, beforeEach, afterEach } = require('mocha');
const sinon = require('sinon');
const sendPaymentRequestToAPI = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('working as expected with args 100, 20', () => {
    sendPaymentRequestToAPI(100, 20);
    sinon.assert.calledWith(consoleSpy, 'The total is: 120');
    sinon.assert.calledOnce(consoleSpy);
  });

  it('should work with 10 and 10 args', () => {
    sendPaymentRequestToAPI(10, 10);
    sinon.assert.calledWith(consoleSpy, 'The total is: 20');
    sinon.assert.calledOnce(consoleSpy);
  });
});
