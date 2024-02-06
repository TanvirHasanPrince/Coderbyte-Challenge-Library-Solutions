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

/*
Input => Coderbyte
This is not an empty string. So it will go to else block. 
So the FirstReverse is getting “oderbyte” & str.chartAt(0) is “c” here
FirstReverse is getting “derbyte” & str.chartAt(0) is “o” here
FirstReverse is getting “erbyte” & str.chartAt(0) is “d” here
FirstReverse is getting “rbyte” & str.chartAt(0) is “e” here
FirstReverse is getting “byte” & str.chartAt(0) is “r” here
FirstReverse is getting “yte” & str.chartAt(0) is “b” here
FirstReverse is getting “te” & str.chartAt(0) is “y” here
FirstReverse is getting “e” & str.chartAt(0) is “t” here
FirstReverse is getting “” & will return “” and str.chartAt(0) is “e” here


Initial Call: FirstReverse("") + "e"
FirstReverse("") returns "" (base case).
"" + "e" results in "e".
Recursive Call: FirstReverse("e") + "t"
FirstReverse("e") returns "e" (base case).
"e" + "t" results in "et".
Recursive Call: FirstReverse("te") + "y"
FirstReverse("te") returns "et" (reversed).
"et" + "y" results in "ety".
Recursive Call: FirstReverse("yte") + "b"
FirstReverse("yte") returns "ety" (reversed).
"ety" + "b" results in "etyb".
Recursive Call: FirstReverse("byte") + "r"
FirstReverse("byte") returns "etyb" (reversed).
"etyb" + "r" results in "etybr".
Recursive Call: FirstReverse("rbyte") + "o"
FirstReverse("rbyte") returns "etybr" (reversed).
"etybr" + "o" results in "etybro".
Recursive Call: FirstReverse("erbyte") + "d"
FirstReverse("erbyte") returns "etybro" (reversed).
"etybro" + "d" results in "etybrod".
Recursive Call: FirstReverse("derbyte") + "o"
FirstReverse("derbyte") returns "etybrod" (reversed).
"etybrod" + "o" results in "etybrodo".
Recursive Call: FirstReverse("oderbyte") + "C"
FirstReverse("oderbyte") returns "etybrodo" (reversed).
"etybrodo" + "C" results in "etybrodoC"

*/
