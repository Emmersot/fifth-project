import {AgeCalculator} from './../src/js/ageCalculator.js';

describe('AgeCalculator', () => {
  let calc;
  beforeEach(() => {
    calc = new AgeCalculator(25);
  });


  test('should correctly return a new calc object with the age property', () => {
    expect(calc.age).toEqual(25)
  });
});