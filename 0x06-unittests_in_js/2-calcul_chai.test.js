const {it, describe} = require('mocha');
const calculateNumber = require("./2-calcul_chai");
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber function', () => {
  describe('Two floating numbers', () => {
    it('arguments 1.4 and 4.5 should return 6', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('Subtract two floating number', () => {
    it('arguments 1.4 and 4.5 should return -4', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('Divide two floating numbers', () => {
    it('arguments 1.4 and 4.5 should return 0.2', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
  });

  describe('Divide by  Zero', () => {
    it('arguments 1.4 and 0 should return Error', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe('Add two negative floating numbers', () => {
    it('arguments -3.5 and -8.9 should return -12', () => {
      expect(calculateNumber('SUM', -3.5, -8.9)).to.equal(-12);
    });
  });
  
  describe('Subtract two negative floating numbers', () => {
    it('arguments -1.4 and -4.5 should return 3', () => {
      expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(3);
    });
  });

  describe('Divide two negative floating numbers', () => {
    it('arguments -1.4 and -4.9 should return 0.2', () => {
      expect(calculateNumber('DIVIDE', -1.4, -4.9)).to.equal(0.2);
    });
  });

  describe('Wrong operation type', () => {
    it('passed wrong type with correct arguments should return Error', () => {
      expect(calculateNumber('add', -1.4, -4.9)).to.equal('Error');
    });
  });
});
