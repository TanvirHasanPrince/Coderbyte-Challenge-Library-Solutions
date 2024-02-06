/*
First Factorial
Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.
Examples
Input: 4
Output: 24
Input: 8
Output: 40320

*/

function FirstFactorial(num) {
  let total = 1;
  for (i = 1; i <= num; i++) {
    total = total * i;
  }

  return total;
}

// keep this function call here
console.log(FirstFactorial(readline()));


// Another Method with Recursion
function FirstFactorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * FirstFactorial(num - 1);
  }
}

// keep this function call here
console.log(FirstFactorial(readline()));

/*

factorial(1) returns 1 * 1 = 1:
When factorial(1) is called, it hits the base case where n is 0, so it returns 1.
This value, 1, is returned to the caller, which was factorial(2).
Therefore, factorial(2) returns 2 * 1 = 2.
factorial(2) returns 2 * 1 = 2:
factorial(2) returns 2 * 1, which equals 2.
This value, 2, is returned to the caller, which was factorial(3).
Therefore, factorial(3) returns 3 * 2 = 6.
factorial(3) returns 3 * 2 = 6:
factorial(3) returns 3 * 2, which equals 6.
This value, 6, is returned to the caller, which was factorial(4).
Therefore, factorial(4) returns 4 * 6 = 24.
factorial(4) returns 4 * 6 = 24:
factorial(4) returns 4 * 6, which equals 24.
This value, 24, is returned to the caller, which was factorial(5).
Therefore, factorial(5) returns 5 * 24 = 120.


*/