/*
MUTATIONS
Return true if the string in the first element of the array contains all of the letters of the string in the 
second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present 
in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.indexOf()
*/


function mutation(arr) {
	var partOne = arr[0].toLowerCase().split("");
	console.log("Print partOne: ", partOne);
	var partTwo = arr[1].toLowerCase().split("");
	console.log("Print partTwo: ", partTwo);
	for (var i = 0; i < partTwo.length; i++) {
		if (partOne.indexOf(partTwo[i], 0) < 0) { //check if it returns anything less than 0 then NO MATCH FOUND
			console.log("What is partTwo: ", partTwo[i]);
			return false;
		}
	} return true;
}

console.log(mutation(["hello", "hey"]));
//console.log(mutation(["voodoo", "no"]));
//console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
//console.log(mutation(["hello", "Hello"]));

