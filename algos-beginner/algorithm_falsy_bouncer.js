 /*
FALSY BOUNCER
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Boolean Objects
Array.filter()
*/

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  //var x = new Boolean("false");
  var newArray = arr.filter(function (val){
	if (val === false || val === null || val === isNaN() || val === undefined || val === 0 || val === "") {
		return "";
	} else 
	return val;
});
  return newArray;
}

console.log(bouncer([7, "ate", "", false, 9])); //return [71, "ate", 9]
console.log(bouncer(["a", "b", "c"])); //return ["a", "b", "c"]
console.log(bouncer([false, null, 0, NaN, undefined, ""])); //return []
console.log(bouncer([1, null, NaN, 2, undefined])); //return [1, 2]