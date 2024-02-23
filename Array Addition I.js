/*
Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array (excluding the largest number) can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.
*/

function ArrayAdditionI(arr) {
  let largestNumber = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== largestNumber) {
      sum = sum + arr[i];
    }
  }

  if (sum >= largestNumber) {
    return true;
  } else {
    return false;
  }
}

// keep this function call here
console.log(ArrayAdditionI(readline()));