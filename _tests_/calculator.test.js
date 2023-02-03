import {Age} from './../src/calculator.js';

describe ('Age class functionality', () => {
  let age;

  beforeEach(() => {
    age = new Age(25);
  });

  test('it should create an age object and calculate the Mercury age', () => {
    expect(age.getMercuryAge()).toEqual(104);
  });
});

