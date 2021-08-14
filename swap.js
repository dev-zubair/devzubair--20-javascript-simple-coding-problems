// A lot of algorithms require swapping 2 variables.

var first = 5;
var second = 7;
console.log(first, second);

//but I want to see #second would be 1st and #one will be 2nd. 
//METHODS 1 - Its called - Temporary variable

var temp = first;
first = second;
second = temp;
console.log(first, second);

//METHODS 2 - [WITHOUT TEMP] Its Called - Destructuring assignment

//During a coding interview, you could be asked “How to swap 2 variables without a temporary variable?”.

var first = 5;
var second = 7;
[first, second] = [second, first];
console.log(first, second);
