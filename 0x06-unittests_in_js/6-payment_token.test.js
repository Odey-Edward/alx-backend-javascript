const { describe, it, beforeEach, afterEach } = require('mocha');
const getPaymentTokenFromAPI = require('./6-payment_token');
const assert = require('assert');

describe('getPaymentTokenFromAPI', () => {
  it('asynchronous data returned successfully', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        assert.strictEqual(res.data, 'Successful response from the API');
	done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('should be a Promise instance', (done) => {
    const res = getPaymentTokenFromAPI(true);

    assert.ok(res instanceof Promise);

    done();
  });
});
