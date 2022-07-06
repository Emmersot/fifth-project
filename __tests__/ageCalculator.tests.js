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
  
  test('should set a lifeExpectancy value based on a if else statement for gender female to return years left for earth', () => {
    let female = new ageCalculator(25, "female");
    expect(female.lifeExpect()).toEqual(53);
  });

  test('should set a lifeExpectancy value based on a if else statement for gender male to return years left for earth', () => {
    let male = new ageCalculator(25, "male");
    expect(male.lifeExpect()).toEqual(46);
  });

  test('should calculate the time a female has lived passed lifeExpect on all the planets', () => {
    let female = new ageCalculator(25, "female");
    female.deathInYears()
    console.log(female);
    expect(female.mercury).toEqual(-26);
    expect(female.venus).toEqual(38);
    expect(female.mars).toEqual(65);
    expect(female.jupiter).toEqual(76);
  });

  test('should calculate the time a male has lived passed lifeExpect on all the planets', () => {
    let male = new ageCalculator(25, "male");
    male.deathInYears()
    console.log(male);
    expect(male.mercury).toEqual(-29);
    expect(male.venus).toEqual(38);
    expect(male.mars).toEqual(65);
    expect(male.jupiter).toEqual(76);
  });
});