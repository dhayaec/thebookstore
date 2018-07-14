import { add } from './utils';

describe('utils', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(2, 2)).toEqual(4);
    });
  });
});
