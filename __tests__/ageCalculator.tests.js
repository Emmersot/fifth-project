import ageCalculator from './../src/js/ageCalculator.js';

describe('ageCalculator', () => {
  let calc;

  beforeEach(() => {
    calc = new ageCalculator(25);
  });

  test('should correctly return a new calc object with the age property', () => {
    expect(calc.earth).toEqual(25);
  });

  test('should return users age on mercury', () => {
    expect(calc.mercuryAge()).toEqual(104);
  });

  test('should return users age on venus', () => {
    expect(calc.venusAge()).toEqual(40);
  });

  test('should return users age on mars', () => {
    expect(calc.marsAge()).toEqual(13);
  });

  test('should return users age on jupiter', () => {
    expect(calc.jupiterAge()).toEqual(2);
  });
  
  test('should set a lifeExpectancy value based on a if else statement for gender female', () => {
    let female = new ageCalculator(25, "female");
    expect(female.lifeExpect()).toEqual(53);
  });
});

