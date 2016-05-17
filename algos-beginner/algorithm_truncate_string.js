/*
TRUNCATE A STRING
Truncate a string (first argument) if it is longer than the given maximum 
string length (second argument). Return the truncated string with a ... 
ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, 
then the addition of the three dots does not add to the string length in 
determining the truncated string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.slice()
*/

function truncateString(str, num) {
  // Clear out that junk in your trunk
  var nStr = str.slice(0, num);
  //console.log("New String: ", nStr);
  if (nStr.length < 3) {
  	return nStr + "...";
  } 
  else {
  	return str.length > num ? str.slice(0, num-3) + "...": str;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));