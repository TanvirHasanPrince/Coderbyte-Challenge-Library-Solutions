/*
Have the function BitwiseOne(strArr) take the array of strings stored in strArr, which will only contain two strings of equal length that represent binary numbers, and return a final binary string that performed the bitwise OR operation on both strings. A bitwise OR operation places a 0 in the new string where there are zeroes in both binary strings, otherwise it places a 1 in that spot. For example: if strArr is ["1001", "0100"] then your program should return the string "1101"
*/

function BitwiseOne(strArr) {
  let result = "";
  const firstArray = strArr[0];
  const secondArray = strArr[1];

  for (i = 0; i < firstArray.length; i++) {
    if (firstArray[i] === "0" && secondArray[i] === "0") {
      result = result + "0";
    } else {
      result = result + "1";
    }
  }

  return result;
}

// keep this function call here
console.log(BitwiseOne(readline()));