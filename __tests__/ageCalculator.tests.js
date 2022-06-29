import ageCalculator from './../src/js/ageCalculator.js';

describe('ageCalculator', () => {
  let calc;

  beforeEach(() => {
    calc = new ageCalculator(25);
  });

  test('should correctly return a new calc object with the age property', () => {
    expect(calc.earth).toEqual(25);
  
  });
});