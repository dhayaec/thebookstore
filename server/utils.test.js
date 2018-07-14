const { add } = require('./utils');

describe('utils test', () => {
  describe('add()', () => {
    it('add should add two numbers', () => {
      expect(add(4, 4)).toEqual(8);
    });
  });
});
