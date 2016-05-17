/*
INSTRUCTIONS
Use a for loop to work to push the values 1 through 5 onto myArray.

// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
*/
// Setup
var myArray = [];

// Only change code below this line.
for (var i = 0; i < 5; i++) {
  myArray.push(i+1);
}
console.log(myArray);
/*INSTRUCTIONS
Push the odd numbers from 1 through 9 to myArray using a for loop.
// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
*/
// Setup
var myArray = [];

// Only change code below this line.
for (var i = 0; i < 10; i += 2) {
  myArray.push(i+1);
}
console.log(myArray);

/*INSTRUCTIONS
Push the odd numbers from 9 through 1 to myArray using a for loop.
// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
*/
// Setup
var myArray = [];

// Only change code below this line.
for (var i = 10; i > 0; i -= 2) {
  myArray.push(i-1);
}
console.log(myArray);

/* INSTRUCTIONS
Declare and initialize a variable total to 0. Use a for loop to add the value of each 
element of the myArr array to total.

// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}
*/
// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
console.log (total);
