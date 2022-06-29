//red phase
//commit each test after i have written it
//and before i write the corresponding method in business logic

//green phase
//write the code for the test
//commit once it passes



// A mercury years is .24 earth years.
// A Venus year is .62 Earth years.
// A Mars year is 1.88 Earth years.
// A Jupiter year is 11.86 Earth years.
export default class ageCalculator {
  constructor (age, life, lifeExpectancy, gender, mercury, venus, mars, jupiter) {
    this.earth = age;
    this.lifeExpectancy = lifeExpectancy;
    this.life = life;
    this.mercury = mercury;
    this.venus = venus;
    this.mars = mars;
    this.jupiter = jupiter;
    this.gender = gender;
    
  }
  mercuryAge(){
    this.mercury = Math.floor(this.earth / 0.24);
    return this.mercury; 
  }
  venusAge(){
    this.venus = Math.floor(this.earth / 0.62);
    return this.venus;
  }
  // marsAge() {
  //   this.mars = Math.floor(this.earth / 1.88);
  //   return this.mars;
  // }
  jupiterAge() {
    this.jupiter = Math.floor(this.earth / 11.86);
    return this.jupiter;
  } 

  lifeExpectancy() {
    if(this.gender === "female") {
      this.lifeExpectancy = 78;
      this.life = this.lifeExpectancy - this.earth;
      return this.life;
    } else if (this.gender === "male") {
      this.life = this.lifeExpectancy - this.earth;
      return this.life;
    }
  }

  deathInYears() {
    if(this.gender === "female") {
      this.mercury = (78 - this.mercuryAge);
      this.venus = (78 - this.venusAge);
      this.mars = (78 - this.marsAge);
      this.jupiter = (78 - this.jupiter);
      this.life = this.lifeExpectancy - this.earth;
    } else {
      this.mercury = (71 - this.mercuryAge);
      this.venus = (71 - this.venusAge);
      this.mars = (71 - this.marsAge);
      this.jupiter = (71 - this.jupiter);
      this.life = this.lifeExpectancy - this.earth;
    }
  }
}

