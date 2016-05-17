function randomFraction() {

  // Only change code below this line.

  return Math.random() * (1 - 0); //calls a random number between 0 & 1

  // Only change code above this line.
}
 console.log("My Random Fraction: ", randomFraction());

 var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  return Math.floor(Math.random() * 10);
}
console.log("My Random Whole Number: ", randomWholeNum());

/* 
INSTRUCTIONS

Create a function called randomRange that takes a range myMin and myMax 
and returns a random number that's greater than or equal to myMin, and is 
less than or equal to myMax, inclusive.
*/
function ourFunction(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourFunction(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}

// Change these values to test your function
var myRandom = randomRange(5, 15);
console.log ("My Random Range: ", myRandom);

