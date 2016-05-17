//////TEST CASES//////
//Cards Sequence 2, 3, 4, 5, 6 should return "5 Bet"
//Cards Sequence 7, 8, 9 should return "0 Hold"
//Cards Sequence 10, J, Q, K, A should return "-5 Hold"
//Cards Sequence 3, 7, Q, 8, A should return "-1 Hold"
//Cards Sequence 2, J, 9, 2, 7 should return "1 Bet"
//Cards Sequence 2, 2, 10 should return "1 Bet"
//Cards Sequence 3, 2, A, 10, K should return "-1 Hold"

var count = 0;

function cc(card) {
  var count = 0;
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      return count + " Bet";
    case 7:
      return count + " Bet";
    case 8:
    case 9:
      return count + " Hold";
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -= 1;
      if (count === 1) {
        count -= 1;
        return count + " Bet";
      } else if (count <= -5) {
        count -= 1;
        return count + " Hold";
      } else if (count <= -1) {
      count -= 1;
      return count + " Hold";
      } 
  }
  
  return "Change Me";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
console.log(cc('J')); console.log(cc(3)); console.log(cc('K')); console.log(cc('K')); console.log(cc('J'));
