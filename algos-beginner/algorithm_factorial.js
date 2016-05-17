/*
FACTORIALIZE A NUMBER
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of 
all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arithmetic Operators
*/
function factorialize(num) {
	//var arr = [];
	var theFactorial = 1;
	for (var i = 1; i <= num; i++) {
		theFactorial *= i;
	}return theFactorial;
}

console.log(factorialize(5));

//FCC SOLUTION
/*function factorialize(num) {
  if (num === 0) { return 1; }
  return num * factorialize(num-1);
}

factorialize(5);*/