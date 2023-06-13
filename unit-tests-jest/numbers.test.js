import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

describe('toDollars', () => {
  describe('when amount is not an integer', () => {
    it('returns NaN', () => {
      const amount = 'abc';
      const result = toDollars(amount);
      expect(result).toEqual('$NaN');
    });
  });
  describe('when amount is an integer', () => {
    it('converts amount to dollar amount', () => {
      const amount = 550;
      const result = toDollars(amount);
      expect(result).toEqual('$5.50');
    });
  });
});

describe('divideBy', () => {
  describe('when numbers are not all integer', () => {
    it('returns NaN', () => {
      const amount = [2, 4, 'a'];
      const result = divideBy(amount, 2);
      expect(result).toEqual([1, 2, NaN]);
    });
  });
  describe('when amount is an integer', () => {
    it('returns array of divided numbers', () => {
      const numbers = [2, 4, 6, 7];
      const result = divideBy(numbers, 2);
      expect(result).toEqual([1, 2, 3, 3.5]);
    });
  });
});

describe('multiplyBy', () => {
  it('returns object with value multiplied', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    };
    const result = multiplyBy(obj, 2);
    expect(result).toEqual({
      a: 2,
      b: 4,
      c: 6,
    });
  });
});
