const { describe, it } = require('mocha');
const request = require('request');
const assert = require('assert');

describe('Index page', () => {
  describe('GET /', () => { 
    it('should return 200 status code', () => {
      request('http://127.0.0.1:7865', (err, res, body) => {
        assert.strictEqual(res.statusCode, 200);
      });
    });

    it('should return correct result', () => {
      request('http://127.0.0.1:7865', (err, res, body) => {
        assert.strictEqual(body, 'Welcome to the payment system');
      });
    });
  });
});
