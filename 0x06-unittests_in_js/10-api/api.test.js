const request = require('request');
const { expect } = require('chai');

describe('Integration Testing', () => {
  describe('GET /', () => {
    it('Code: 200 | Body: Welcome to the payment system', (done) => {
      const options = {
        url: 'http://localhost:7865',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('GET /cart/:id', () => {
    it('Correct status code when :id is a number?', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/10',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 10');
        done();
      });
    });

    it('Correct status code when :id is NOT a number?', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/ten',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /available_payments', () => {
    it('should return required data', (done) => {
      request.get('http://localhost:7865/available_payments', (err, res, body) => {
	if (err) return done(err);

        const expectedData = {
          'payment_methods': {
            'credit_cards': true,
            'paypal': false
          }
        }

	expect(res.statusCode).to.equal(200);
	expect(JSON.parse(body)).to.deep.equal(expectedData);
	done();
      });
    });
  });

  describe('POST /login', () => {
    it('should send and return user info', (done) => {
      const expectedData = 'Welcome Betty';

      const postData = {
        userName: 'Betty'
      };

      const options = {
        uri: 'http://localhost:7865/login',
        method: 'POST',
        json: postData
      };

      request(options, (err, res, body) => {
	if (err) return done(err);

        expect(res.statusCode).to.equal(200);

        expect(body).to.equal(expectedData);

        done();
      });
    });
  });
});
