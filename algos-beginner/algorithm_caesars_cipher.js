/*
CAESARS CIPHER
One of the simplest and most widely known ciphers is a Caesar cipher, also 
known as a shift cipher. In a shift cipher the meanings of the letters are 
shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are 
shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a 
decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character 
(i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write 
your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()

*/

function rot13(str) { // LBH QVQ VG!
	//console.log(str.charCodeAt());
	var eStr = str.split("");
	var dec = eStr.map(function (val) {
		//console.log (val);
		if (val.charCodeAt() >= 65 && val.charCodeAt() <=77) { 
			//check only the letters
			//console.log ("Inside IF: ", val, String.fromCharCode(val.charCodeAt()+13));
			val = String.fromCharCode(val.charCodeAt()+13);
		} else 
		if (val.charCodeAt() > 77) {
			//console.log ("Inside ELSE: ", val);
			val = String.fromCharCode(val.charCodeAt()-13);
		} return val;
	});
	//console.log("This is +13: ", String.fromCharCode(str.charCodeAt(0)+13));
	return dec.join("");
}

// Change the inputs below to test
//console.log(rot13(";"));
console.log(rot13("SERR PBQR PNZC")); //returns "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!")); //returns "FREE PIZZA!"
console.log(rot13("SERR YBIR?")); //returns "FREE LOVE?"
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));
//returns "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."