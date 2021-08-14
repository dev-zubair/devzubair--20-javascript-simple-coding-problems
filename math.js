//------------------------
// Math.abs - Example - 
//------------------------
//Math.abs
//The Math.abs() function returns the absolute value of a number. That is, it returns x if x is positive or zero, and the negation of x if x is negative.
const myNumber = -5;
const output = Math.abs(myNumber);
console.log(output);

//Math.ceil
//The Math.ceil() function always rounds a number up to the next largest integer.

const ceillNumber = 24.4545453;
const ceilOutput = Math.ceil(ceillNumber);
console.log(ceilOutput);

//Math.floor
// The Math.floor() function returns the largest integer less than or equal to a given number.

const floorNumber = 24.45454545;
const flootOutput = Math.floor(floorNumber);
console.log(flootOutput);

// Math.round
//The Math.round() function returns the value of a number rounded to the nearest integer.

const roundNumber = 24.55454545;
const roundOutput = Math.round(roundNumber);
console.log(roundOutput);

//Math.random
//The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.

const randomNumber = Math.random() * 5;
console.log(randomNumber);





//------------------------
//Math.abs - --------- Example from Mozilla -
//------------------------
function difference(a, b) {
    return Math.abs(a - b);
  }
  
  console.log(difference(3, 5));
  // expected output: 2 [It supposed to be -2 but its showing positive result]
  
  console.log(difference(5, 3));
  // expected output: 2
  
  console.log(difference(1.23456, 7.89012));
  // expected output: 6.6555599999999995


//------------------------
//Math.ceil - --------- Example from Mozilla -
//------------------------
console.log(Math.ceil(.95));
// expected output: 1

console.log(Math.ceil(4));
// expected output: 4

console.log(Math.ceil(7.004));
// expected output: 8

console.log(Math.ceil(-7.004));
// expected output: -7


//------------------------
//Math.floor - --------- Example from Mozilla -
//------------------------
console.log(Math.floor(5.95));
// expected output: 5

console.log(Math.floor(5.05));
// expected output: 5

console.log(Math.floor(5));
// expected output: 5

console.log(Math.floor(-5.05));
// expected output: -6


//------------------------
//Math.round - --------- Example from Mozilla -
//------------------------
console.log(Math.round(0.9));
// expected output: 1

console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// expected output: 6 6 5

console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// expected output: -5 -5 -6


//------------------------
//Math.random - --------- Example from Mozilla -
//------------------------
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(3));
  // expected output: 0, 1 or 2
  
  console.log(getRandomInt(1));
  // expected output: 0
  
  console.log(Math.random());
  // expected output: a number from 0 to <1
  