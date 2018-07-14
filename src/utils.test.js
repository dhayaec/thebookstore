import { add } from './utils';

describe('utils', () => {
  describe('add', () => {
    it('shouldff add two numbers', () => {
      expect(add(2, 2)).toEqual(4);
    });
  });
});
