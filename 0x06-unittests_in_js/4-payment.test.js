const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const { describe, it } = require('mocha');
const Utils = require('./utils.js');
const assert = require('assert');

describe('sendPaymentRequestToApi', () => {
  const calculateNumberStub = sinon.stub().returns(10);
  const consoleSpy = sinon.spy(console, 'log');

  Utils.calculateNumber = calculateNumberStub;

  const result = Utils.calculateNumber('DIVIDE', 100, 20);
  
  sendPaymentRequestToApi(100, 20);

  it('should return 10', () => {
    assert.strictEqual(result, 10);
  });

  it('console.log is logging the correct message', () => {
    sinon.assert.calledWith(consoleSpy, 'The total is: 10');
  });

  it('should be called with the right arguments', () => {
    sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);
  });

  consoleSpy.restore()
});

