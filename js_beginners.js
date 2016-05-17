 //CHANGING ARRAY ITEM EXAMPLE
var ourArray = [1,2,3];
ourArray[1] = 3; // ourArray now equals [1,3,3].

// Setup
var myArray = [1,2,3];

// Change the 1st item to 3
myArray[0] = 3;

//TO TEST
//console.log(myArray);
// ---------------------------------------------------

// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

//Access the [7,,8,9] object in array & pull out the 2nd item
var myData = myArray[2][1];
<!-- ################################################### -->
//USING .PUSH TO ADD TO THE END OF A MULTI-DIMENSIONAL ARRAY EXAMPLE
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]); 
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]
// ---------------------------------------------------
// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.

myArray.push(["dog", 3]);
<!-- ################################################### -->
//USING .POP TO "BREAK OFF" THE LAST OBJECT FROM THE ARRAY & STORE IN A 
//VARIABLE EXAMPLE
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop(); 
// removedFromOurArray now equals 3, and ourArray now equals [1,2]
// ---------------------------------------------------
// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
var removedFromMyArray = myArray.pop();
<!-- ################################################### -->
//USING .SHIFT () TO REMOVE THE 1ST ITEM FROM THE ARRAY & STORE IN A 
//VARIABLE EXAMPLE
var ourArray = ["Stimpson", "J", ["cat"]];
removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].
// ---------------------------------------------------
// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray = myArray.shift();
<!-- ################################################### -->

//USING .UNSHIFT() TO REPLACE THE 1ST OBJECT IN AN ARRAY EXAMPLE
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy"); 
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.
myArray.unshift(["Paul", 35]);
<!-- ################################################### -->

//CONSTRUCTING & CALLING FUNCTIONS EXAMPLE
function functionWithArgs(a, b) {
  console.log(a - b);
}
functionWithArgs(10, 5); // Outputs 5

// Only change code below this line.
function functionWithArgs(a, b) {
  console.log(a+b);
}

functionWithArgs(1, 2);
functionWithArgs(7,9);
<!-- ################################################### -->

//FUNCTION TEST .PUSH AN ELEMENT & REMOVE & RETURN THE 1ST ELEMENT
function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  //var removedElem = arr.shift();
  return arr.shift();  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));