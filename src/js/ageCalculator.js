//red phase
//commit each test after i have written it
//and before i write the corresponding method in business logic

//green phase
//write the code for the test
//commit once it passes

//make sure i have 100% coverage at the end of all tests

// A mercury years is .24 earth years.
// A Venus year is .62 Earth years.
// A Mars year is 1.88 Earth years.
// A Jupiter year is 11.86 Earth years.
export class ageCalculator {
//set global age based on inputted value or my own this.age = 25
//create mercuryAge

  constructor (earthAge) {
    this.earthAge = earthAge;
    this.marsAge = marsAge;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.jupiterAge = jupiterAge;
  }
  mercuryAge(earthAge){
    return earthAge/.24;
  }
  venusAge(earthAge){
    return earthAge/.62;
  }
  marsAge(earthAge) {
    return earthAge/1.88;
  }
  jupiterAge(earthAge) {
    return earthAge/11.86;
  } 

//earthLife will be 76yrs old 
//I will use this to then take the age from above for the different planets and subtract earthLife from them to get the remainder
//The remainder will be + or - and will tell me if someone lived longer or shorter then they would have on earth

  constructor (earthLife) {
    this.earthLife = earthLife;
    this.marsLife = marsLife;
    this.mercuryLife = mercuryLife;
    this.venusLife = venusLife;
    this.jupiterLife = jupiterLife;
  }
  mercuryLife(mercuryAge){
    return mercuryAge - earthAge;
  }
  venusLife(venusAge){
    return venusAge - earthAge;
  }
  marsLife(marsAge){
    return marsAge - earthAge;
  }
  jupiterLife(jupiterAge){
    return jupiterAge - earthAge;
  }
}