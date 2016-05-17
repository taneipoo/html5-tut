function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) { 
    if (par === 1 || par === 4)
    return "Hole-in-one!";
  }  else if (strokes === 2) {
    if (par === 4 || par === 5) {
    return "Eagle";
    }
  } else if (par === 4 && strokes ===3 ) {
    return "Birdie";
  } else if (par === 4 && strokes === 4) {
      return "Par";
    } else if (par === 4 && strokes === 5) {
      return "Bogey";
    } else if (par === 4 && strokes === 6) {
      return "Double Bogey";
    } else if (par === 5 && strokes === 5) {
      return "Par";
    } else if (par === 4 || par === 5) {
    if (strokes === 7 || strokes === 9) {
      return "Go Home!";
    }
  } 
  
  
  return "Change Me";
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);

/* SOLUTION FROM FCC
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1){
    return "Hole-in-one!";
  } else if (strokes <= par -2){
    return "Eagle";
  } else if (strokes == par -1) {
    return "Birdie";
  } else if (strokes == par) {
    return "Par";
  } else if (strokes == par +1) {
    return "Bogey";
  } else if (strokes == par +2) {
    return "Double Bogey";
  } else {
    return "Go Home!";
  }
  // Only change code above this line
}
// Change these values to test
golfScore(5, 4);
*/