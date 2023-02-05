export class Age {
  constructor(age) {
    this.age = age
  }

  getMercuryAge() {
    return Math.floor(this.age / .24);
  }

  getVenusAge() {
    return Math.floor(this.age / .62);
  }

  getMarsAge() {
    return Math.floor(this.age / 1.88);
  }

  getJupiterAge() {
    return Math.floor(this.age / 11.86);
  }

  getYearsSinceBirthday(pastBirthday) {
    const earthYearsPassed = this.age - pastBirthday;
    return {
      earthYears: Math.floor(earthYearsPassed),
      mercuryYears: Math.floor(earthYearsPassed / .24),
      venusYears: Math.floor(earthYearsPassed / .62),
      marsYears: Math.floor(earthYearsPassed / 1.88),

    };
    
  }

}


  