/*
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
Examples
Input: "coderbyte"
Output: etybredoc
Input: "I Love Code"
Output: edoC evoL I

*/


//First Method => Split, Reverse and join
function FirstReverse(str) {
  const deconstructed = str.split("");

  const resversed = deconstructed.reverse();

  const joined = resversed.join("");

  return joined;
}

// keep this function call here
console.log(FirstReverse(readline()));

//Second Method=> Starging the loop from the end and decreasing i
function FirstReverse(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  return newString;
}

// keep this function call here
console.log(FirstReverse(readline()));

//Third Method=> Recursion
function FirstReverse(str) {
  if (str === "") return "";
  else {
    return FirstReverse(str.slice(1)) + str.charAt(0);
  }
}

// keep this function call here
console.log(FirstReverse(readline()));