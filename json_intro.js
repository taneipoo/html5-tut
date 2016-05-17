/* INTRODUCTION TO JAVASCRIPT OBJECT NOTATION
JSON */

/*
JavaScript Object Notation or JSON uses the format of JavaScript Objects to store data. 
JSON is flexible because it allows for Data Structures with arbitrary combinations of 
strings, numbers, booleans, arrays, and objects.

Here is an example of a JSON object:

var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP" ],
    "gold": true
  }
];

This is an array of objects and the object has various pieces of metadata about an album. 
It also has a nested formats array. Additional album records could be added to the top 
level array.

NOTE
You will need a comma in between objects in JSON objects with more than one object in the 
array.
*/
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ 
      "CS", 
      "8T", 
      "LP" ],
    "gold": true
  },
  {
    "artist": "Miley Cyrus",
    "title": "Some Random Song She Sings",
    "release_year": 2020,
    "formats": [
      "LP",
      "DVD",
      "CD" ],
    "gold": false
  }
  // Add record here
];

console.log(myMusic[1].artist);