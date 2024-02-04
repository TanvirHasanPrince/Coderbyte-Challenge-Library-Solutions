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

/*

Find Intersection
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
*/