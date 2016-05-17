/*
CHUNKY MONKEY
Write a function that splits an array (first argument) into groups the length 
of size (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.push()
Array.slice()
*/
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
/*  var newArr = arr.map (function (val) {
  	console.log("VAL is ", val);
  	console.log(this.push(arr.slice(val, val+size));
  });*/
  for (var i = 0; i <arr.length; i += size){
  	newArr.push(arr.slice(i, i+size));
  }
  return newArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));