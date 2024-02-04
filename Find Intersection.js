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
