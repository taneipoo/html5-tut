/*
REPEAT A STRING REPEAT A STRING
Repeat a given string (first argument) num times (second argument). Return an empty string if num is a negative number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global String Object
*/
function repeatStringNumTimes(str, num) {
  // repeat after me
  var repeater = "";
  for (var i = 0; i < num; i++) {
  	repeater += str;
  }
  return repeater;
}

console.log(repeatStringNumTimes("abc", 3));