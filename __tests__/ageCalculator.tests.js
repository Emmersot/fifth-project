import ageCalculator from './../src/js/ageCalculator.js';

describe('ageCalculator', () => {
  let calc;

  beforeEach(() => {
    calc = new ageCalculator(25);
  });

  test1('should correctly return a new calc object with the age property', () => {
    expect(calc.earth).toEqual(25);
  });

  test2('should return users age on mercury', () => {
    expect(calc.mercuryAge()).toEqual(104);
  });

});