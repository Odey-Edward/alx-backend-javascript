const assert = require('assert');

const calculateNumber = require("./1-calcul.js");

describe('calculateNumber function', () => {
  describe('Two floating numbers', () => {
    it('arguments 1.4 and 4.5 should return 6', () => {
      assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('Subtract two floating number', () => {
    it('arguments 1.4 and 4.5 should return -4', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('Divide two floating numbers', () => {
    it('arguments 1.4 and 4.5 should return 0.2', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
  });

  describe('Divide by  Zero', () => {
    it('arguments 1.4 and 0 should return Error', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  describe('Add two negative floating numbers', () => {
    it('arguments -3.5 and -8.9 should return -12', () => {
      assert.equal(calculateNumber('SUM', -3.5, -8.9), -12);
    });
  });
  
  describe('Subtract two negative floating numbers', () => {
    it('arguments -1.4 and -4.5 should return 3', () => {
      assert.equal(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
    });
  });

  describe('Divide two negative floating numbers', () => {
    it('arguments -1.4 and -4.9 should return 0.2', () => {
      assert.equal(calculateNumber('DIVIDE', -1.4, -4.9), 0.2);
    });
  });

  describe('Wrong operation type', () => {
    it('passed wrong type with correct arguments should return Error', () => {
      assert.equal(calculateNumber('add', -1.4, -4.9), 'Error');
    });
  });
});
