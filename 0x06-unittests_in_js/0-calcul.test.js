const assert = require('assert');

const calculateNumber = require("./0-calcul.js");

describe('calculateNumber function', () => {
  describe('Two positive numbers', () => {
    it('should round the arguments 1 and 3 and return 4', () => {
      assert.equal(calculateNumber(1, 3), 4);
    });
  });

  describe('Positive and floating number', () => {
    it('should round the arguments 1 and 3.7 and return 5', () => {
      assert.equal(calculateNumber(1, 3.7), 5);
    });
  });

  describe('Two floating numbers', () => {
    it('should round the arguments 1.2 and 3.7 and return 5', () => {
      assert.equal(calculateNumber(1.2, 3.7), 5);
    });
  });

  describe('Two floating numbers', () => {
    it('should round the arguments 1.5 and 3.7 and return 6', () => {
      assert.equal(calculateNumber(1.5, 3.7), 6);
    });
  });
});
