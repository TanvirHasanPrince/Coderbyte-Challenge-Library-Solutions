/*
Have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.
*/

function ExOh(str) {
  let numX = [];
  let numO = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      numX.push(str[i]);
    }
    if (str[i] === "o") {
      numO.push(str[i]);
    }
  }

  if (numX.length === numO.length) {
    return true;
  } else return false;
}

// keep this function call here
console.log(ExOh(readline()));