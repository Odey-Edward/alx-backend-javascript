const sinon = require('sinon');
const { describe, it } = require('mocha');
const sendPaymentRequestToApi = require('./3-payment');
const utils = require('./utils');
const { expect } = require('chai');


describe('send payment request to Api', () => {
  it('should successfully send request to API', () => {
    const calculateNumberSpy = sinon.spy(utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

    calculateNumberSpy.restore();
  });
});

