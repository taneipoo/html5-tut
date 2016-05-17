// Example
var ourDog = {
	"name": "Camper",
	"legs": 4,
	"tails": 1,
	"friends": ["everything!"]
};

// Only change code below this line.

var myDog = {
	"name": "Puppy",
	"legs": 4,
	"tails": 1,
	"friends": ["Wendy Williams", "Shehnaynai", "Cardigan"]
};

/*
var myDog = "Hunter";
var dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
}
var breed = dogs[myDog]; // "Hunter"
console.log(breed)// "Doberman"
*/
//INSTRUCTIONS
//Use the playerNumber variable to lookup player 16 in testObj using bracket notation.
var testObj = {
	12: "Namath",
	16: "Montana",
	19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line


//INSTRUCTIONS
/* Update the myDog object's name property. 
Let's change her name from "Coder" to "Happy Coder". 
You can use either dot or bracket notation. */
var myDog = {
	"name": "Coder",
	"legs": 4,
	"tails": 1,
	"friends": ["Free Code Camp Campers"]
};

// Only change code below this line.
myDog["name"] = "Happy Coder";

//INSTRUCTIONS
/* Add a "bark" property to myDog and set it to a dog sound, such as "woof". 
You may use either dot or bracket notation. */
var myDog = {
	"name": "Happy Coder",
	"legs": 4,
	"tails": 1,
	"friends": ["Free Code Camp Campers"]
};

// Only change code below this line.
myDog.bark = "woof";

//INSTRUCTIONS
//Delete the "tails" property from myDog. You may use either dot or bracket notation.
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"],
  "bark": "woof"
};

console.log("Before: ", myDog);
// Only change code below this line.
delete myDog.tails;

//TO TEST
console.info ("After Delete: ", myDog);