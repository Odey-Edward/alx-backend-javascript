const { describe, it, beforeEach, afterEach } = require('mocha');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {

  it('asynchronous test successful', (done) => {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        if (data) {
	  done();
	} else {
	  done(new Error('Invalid result'));
	}
      })
      .catch((error) => {
        done(error);
      });
  });

});
