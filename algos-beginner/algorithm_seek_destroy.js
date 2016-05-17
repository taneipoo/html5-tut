/*
SEEK AND DESTROY
You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are of the same 
value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arguments object
Array.filter()
*/

function destroyer(arr) {
  // Remove all the values 
/*  var args = Array.prototype.slice.call(arguments);
  args.splice(0, 1);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
  */  
  var newArr = Array.prototype.slice.call(arguments);
  newArr.splice(0, 1); //get rid of the 1st array in the set
   //take all the elements passed in with destroyer function & make it into an array [[], X]
   // console.log(arr);
   //console.log(newArr);
   var nxArr = arr.filter(function (val) {
   	return newArr.indexOf(val) === -1; 
   		//for each value in arr if val is found in newArr then discard, return everything else
   	});
   return nxArr;
}
//console.log("This is a test thingy %coutput", "color: blue; font-size: 33px;");
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); //return [1, 1]
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); //return [1, 5, 1]
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); //return [1]
console.log(destroyer([2, 3, 2, 3], 2, 3)); //return []
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); //return ["hamburger"]
