/*
CONFIRM THE ENDING
Check if a string (first argument, str) ends with the given target string 
(second argument, target).

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.substr()
*/
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str.substr(-target.length) === target ? true:false;
}

console.log(confirmEnding("He has to give me a new name", "name"));