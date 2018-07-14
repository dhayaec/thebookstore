const { add, subtract, multiply } = require('./utils');

describe('utils test', () => {
  describe('add()', () => {
    it('add should add two numbers', () => {
      expect(add(4, 4)).toEqual(8);
    });
  });
  describe('substract()', () => {
    it('should substract numbers', () => {
      expect(subtract(7, 1)).toEqual(6);
    });
  });
  describe('multiply', () => {
    it('should multiply numbers', () => {
      expect(multiply(5, 5)).toEqual(25);
    });
  });
});
