/*
Have the function SimpleEvens(num) check whether every single number in the passed in parameter is even. If so, return the string true, otherwise return the string false. For example: if num is 4602225 your program should return the string false because 5 is not an even number.
*/
function checkEven(num) {
  if (num === 0) {
    return true;
  } else if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function SimpleEvens(num) {
  var str = num.toString().split("");
  var str1 = str.filter(checkEven);

  return str.length === str1.length ? true : false;
}

// keep this function call here
SimpleEvens(readline());