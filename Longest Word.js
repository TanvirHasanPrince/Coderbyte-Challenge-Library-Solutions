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
/*
sen.replace(): This method is used to replace occurrences of a pattern in a string with a replacement string.
/[^\w\s]|_/g: This regular expression matches any character that is not a word character (\w), a whitespace character (\s), or an underscore (_). The | symbol means "or", so it matches either any character that is not a word character or an underscore. The g flag performs a global search, meaning it will find all matches rather than just the first one.
"": This is the replacement string, which is an empty string. This means that any characters matched by the regular expression will be removed from the string.
*/
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