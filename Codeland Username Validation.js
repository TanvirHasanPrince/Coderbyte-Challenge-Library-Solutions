function CodelandUsernameValidation(str) {
  const lastIndex = str.length - 1;

  if (str.length < 4 || str.length > 25) {
    return false;
  } else if (!str.charAt(0).match(/[a-z]/i)) {
    return false;
  } else if (!str.match(/^[a-zA-Z0-9_]+$/)) {
    return false;
  } else if (str[lastIndex] === "_") {
    return false;
  } else return true;
}

// keep this function call here
console.log(CodelandUsernameValidation(readline()));

/*
Codeland Username Validation
HIDE QUESTION
Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
*/