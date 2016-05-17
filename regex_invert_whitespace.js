/*
INVERT REGULAR EXPRESSION MATCHES WITH JAVASCRIPT
You can invert any match by using the uppercase version of the regular expression 
selector.

For example, \s will match any whitespace, and \S will match anything that isn't 
whitespace.
*/
/*
INSTRUCTIONS
Use /\S/g to count the number of non-whitespace characters in testString.
*/
// Setup
var testString = "How many non-space characters are there in this sentence?";

// Only change code below this line.

var expression = /\S/g;  // Change this line

// Only change code above this line

// This code counts the matches of expression in testString
var nonSpaceCount = testString.match(expression).length;
console.log("Non-Space Character Count: ", nonSpaceCount);