/*
CHECK FOR PALINDROMES
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and 
backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) 
and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" 
among others.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.replace()
String.toLowerCase()
*/
function palindrome(str) {
  // Good luck!
  //make lower case; remove all spaces; join to make a word without spaces

  var aStr = str.toLowerCase().split(" ").join("").replace(/[^a-zA-Z0-9 ]/g, "");
  //make lower case; remove all white spaces; join to make a word without space;
  //split each character to make an array of all characters; reverse the letters;
  //rejoin all characters to make a word.
  var bStr = aStr.split("").reverse().join(""); 
  console.log("Print aStr: ", aStr);
  console.log("Print bStr: ", bStr);
  if (aStr !== bStr) {
  	return false;
  } else {
  	return true;
  }
}



console.log(palindrome("race Car"));
