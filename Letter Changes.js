/*
Letter Changes
Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
Examples
Input: "hello*3"
Output: Ifmmp*3
Input: "fun times!"
Output: gvO Ujnft!
*/

function LetterChanges(str) {
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var newAlpha = "bcdEfghIjklmnOpqrstUvwxyzA";
  var answer = "";

  for (i = 0; i < str.length; i++) {
    if (alpha.indexOf(str[i]) !== -1) {
      answer += newAlpha.charAt(alpha.indexOf(str[i]));
    } else {
      answer += str[i];
    }
  }
  return answer;
}

// keep this function call here
console.log(LetterChanges(readline()));