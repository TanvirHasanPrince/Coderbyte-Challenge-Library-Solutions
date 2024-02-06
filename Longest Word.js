/*
Longest Word
Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
Examples
Input: "fun&!! time"
Output: time
Input: "I love dogs"
Output: love

*/

function LongestWord(sen) {
  let withoutPunctuation = sen.replace(/[^\w\s]|_/g, "");
  const wordlist = withoutPunctuation.split(" ");
  let longestWord = "";

  for (let i = 0; i < wordlist.length; i++) {
    if (wordlist[i].length > longestWord.length) {
      longestWord = wordlist[i];
    }
  }
  return longestWord;
}

// keep this function call here
console.log(LongestWord(readline()));

//Another Method
function LongestWord(sen) {
  const words = sen.match(/[a-zA-Z]+/g);
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

// keep this function call here
console.log(LongestWord(readline()));