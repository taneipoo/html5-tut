/* INSTRUCTIONS
Convert the switch statement into a lookup table called lookup. 
Use it to lookup val and assign the associated string to the result variable. */

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }; 
  result = lookup[val]; //object: lookup; property: val/foxtrot; 
  // Only change code above this line
  return result;
}

// Change this value to test
console.log(phoneticLookup("foxtrot"));
