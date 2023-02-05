import {Age} from './../src/calculator.js';

describe ('Age class functionality', () => {
  let age;

  beforeEach(() => {
    age = new Age(25);
  });

  test('it should create an age object and calculate the Mercury age', () => {
    expect(age.getMercuryAge()).toEqual(104);
  });

  test('it should calculate the Venus age', () => {
    expect(age.getVenusAge()).toEqual(40);
  });

  test('it should calculate the Mars age', () => {
    expect(age.getMarsAge()).toEqual(13);
  });

  test('it should calculate the Jupiter age', () => {
    expect(age.getJupiterAge()).toEqual(2);
  });

  test('it should determine how many years have passed on each planet since a past birthday', () => {
    const yearsPassed = age.getYearsSinceBirthday(10);
    expect(yearsPassed.earthYears).toEqual(15);
    expect(yearsPassed.mercuryYears).toEqual(62);
    expect(yearsPassed.venusYears).toEqual(24);
  });
});

