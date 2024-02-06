/*
Letter Capitalize
Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.
Examples
Input: "hello world"
Output: Hello World
Input: "i ran there"
Output: I Ran There
*/

function LetterCapitalize(str) {
  let newStr = str.split(" ");
  let result = "";

  for (let i = 0; i < newStr.length; i++) {
    let firstLetter = newStr[i][0].toUpperCase();
    let otherLetters = newStr[i].slice(1); // Get letters after the first one
    result += firstLetter + otherLetters + " ";
  }

  return result;
}

// keep this function call here
console.log(LetterCapitalize(readline()));