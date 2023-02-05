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

  getYearsSinceBirthday(pastBirthdayAge) {
    const earthYearsPassed = this.age - pastBirthdayAge;
    return {
      earthYears: Math.floor(earthYearsPassed),

    }
    
  }

}

  