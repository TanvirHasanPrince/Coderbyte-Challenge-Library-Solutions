function FindIntersection(strArr) {
  let newArr = [];
  const firstElement = strArr[0].split(",");
  const secondElement = strArr[1].split(",");

  for (i = 0; i < firstElement.length; i++) {
    if (secondElement.includes(firstElement[i])) {
      newArr.push(firstElement[i]);
    }
  }

  if (newArr.length === "0") {
    return false;
  } else {
    return newArr.join(", ");
  }
}

// keep this function call here
console.log(FindIntersection(readline()));


//Another Method:
function FindIntersection(strArr) {
  const firstElement = strArr[0].split(", ");
  const secondElement = strArr[1].split(", ");
  var result = firstElement.filter((number1) =>
    secondElement.find((number2) => number2 === number1)
  );
  return result.length > 0 ? result.join(",") : "false";
}

// keep this function call here
console.log(FindIntersection(readline()));

/*
Find Intersection
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.

Examples: 
Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Output: 1,4,13

Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
Output: 1,9,10

*/


