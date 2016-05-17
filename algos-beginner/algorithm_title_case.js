/*
TITLE CASE A SENTENCE
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.split()
*/
function titleCase(str) {
	var tCase = [];
	var arr = str.toLowerCase().split(" ");
	for (i = 0; i < arr.length; i++) {
		tCase[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
	}
	return tCase.join(" ");
}
console.log(titleCase("Here are some helpful links:"));