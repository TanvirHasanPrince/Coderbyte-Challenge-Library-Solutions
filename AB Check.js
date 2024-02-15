/*
Have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false.

*/

function ABCheck(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" && str[i + 4] === "b") {
      return true;
    }
  }

  return false;
}

// keep this function call here
console.log(ABCheck(readline()));

//Another method-checking for Edge case
function ABCheck(str) {
  // convert the whole string to lowercase letters
  var str = str.toLowerCase();

  // loop through the string
  for (var i = 0; i < str.length; i++) {
    // check for "a...b"
    if (str[i] === "a" && str[i + 4] === "b") {
      return true;
    }

    // check for "b...a"
    if (str[i] === "b" && str[i + 4] === "a") {
      return true;
    }

    // NOTE: in JavaScript we don't have to worry about out-of-bounds errors
    // because it just returns undefined and the program keeps running
  }

  // if none of above were encountered
  // then return false by default
  return false;
}

// keep this function call here
ABCheck("Laura sobs");