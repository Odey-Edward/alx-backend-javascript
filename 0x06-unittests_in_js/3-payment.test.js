const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const { describe, it } = require('mocha');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
  const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

  sendPaymentRequestToApi(10, 5);

  it('should call calculateNumber', () => {
    sinon.assert.called(calculateNumberSpy);
  });

  it('should be called with the right arguments', () => {
    sinon.assert.calledWith(calculateNumberSpy, 'SUM', 10, 5);
  });

  calculateNumberSpy.restore();
});

