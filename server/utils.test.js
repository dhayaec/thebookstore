const { add, subtract } = require('./utils');

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
});
