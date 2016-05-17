/*
RETURN LARGEST NUMBERS IN ARRAYS
Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access 
each member with array syntax arr[i].

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Comparison Operators
*/

function largestOfFour(arr) {
	var newArr = arr.map(function (val){
		console.log("VAL: ", val);
		var newVal = val.reduce(function(a, b){
			console.log("A: ", a,"B: ", b);
			return a > b ? a : b; //if (previous) A > (current) B then return A
		}); return newVal;
	}); return newArr;
}



console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
