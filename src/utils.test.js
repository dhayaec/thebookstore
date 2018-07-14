import { add } from './utils';

describe('utils', () => {
  describe('add', () => {
    it('shold add two numbers', () => {
      expect(add(2, 2)).toEqual(4);
    });
  });
});
