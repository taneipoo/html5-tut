/*
FIND THE LONGEST WORD IN A STRING
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.split()
String.length
*/
function findLongestWord(str) {
	var arr = str.split(" ");
	var passOne = "";
	var longest = "";
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].length > passOne.length) {
			longest = arr[i];
			passOne = arr[i];
		}
		
	}
  return longest.length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));