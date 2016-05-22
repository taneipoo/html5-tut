/*
WHERE DO I BELONG
Return the lowest index at which a value (second argument) should be inserted 
into an array (first argument) 
once it has been sorted.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater 
than 1 (index 0), but less than 
2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has 
been sorted it will look like 
[3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.sort()
*/


function getIndexToIns(arr, num) {
  //Find my place in this sorted array.
  //var less = 0;
  var grIdx = 0;
  console.log(arr.sort(function (a, b) { 
  //checks if "a" is < "b" by subtracting & checking the result if yes it's lower
  	return a-b;
  })); 
  for (var i = 0; i < arr.length; i++) {
  	//console.log("INSIDE FOR LOOP: ", arr[i]);
  	//console.log("INSIDE FOR LOOP: ", arr[i+1]);
  	if (num > arr[i]) {
  		//console.log("Inside 1st IF: ", arr[i]);
  		if (num <= arr[i+1]) {
  			//console.log("Inside 2nd IF: ", arr[i]);
  			console.log(grIdx = arr.indexOf(arr[i+1]));
  		}
  		if (arr[i+1] === undefined) {
  			grIdx = arr.indexOf(arr[i])+1;
  		}
  	}
  }
  return grIdx;
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); //should return 3.
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); //should return 2.
console.log(getIndexToIns([40, 60], 50)); //should return 1.
console.log(getIndexToIns([3, 10, 5], 3)); //should return 0.
console.log(getIndexToIns([5, 3, 20, 3], 5)); //should return 2.
console.log(getIndexToIns([2, 20, 10], 19)); //should return 2.
console.log(getIndexToIns([2, 5, 10], 15)); //should return 3.