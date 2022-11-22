// 1st exercise
const sayHello = function (name) {
  if (typeof name !== "string") {
    return "Error";
  }
  const firstLetterBig = name[0].toUpperCase();
  const otherLettersLow = name.slice(1).toLowerCase();
  const nameChangedRegister = `${firstLetterBig}${otherLettersLow}`;
  const userMark = `Mark`;
  const isMark = userMark.toLowerCase() === name.toLowerCase();
  const greeting = isMark ? "Hi" : "Hello";
  return `${greeting}, ${nameChangedRegister}`;
};

console.log(sayHello("maRK"));

// 2nd exercise
const hypotenuse = function (n, m) {
  if (typeof n !== "number" || typeof m !== "number" || n <= 0 || m <= 0) {
    return `Wrong type of number`;
  }
  return Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
};

console.log(hypotenuse(3, 4));

// 3rd exercise
const minimum = function (a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return `Wrong type of number`;
  }

  if (a === b) {
    return `They are equal. Min = ${a}`;
  }
  return Math.min(a, b);
};
console.log(minimum(-1, 5));

// 4th exercise

const isEven = function (incomingNumber) {
  if (typeof incomingNumber !== "number") {
    return "Wrong type of number";
  }
  return incomingNumber % 2 === 0;
};

console.log(isEven(12));

// 5th exercise

const deleteChars = function (incomingString) {
  if (typeof incomingString !== "string") {
    return "Wrong type of variable";
  }
  return incomingString.slice(1, -1);
};

console.log(deleteChars(" this is a string "));

// 6th exercise
const changedCases = function (word) {
  if (typeof word !== "string" || word.length === 0) {
    return "Wrong type of variable or variable is empty";
  }
  const firstLetterBig = word[0].toUpperCase();
  const lastLetterBig = word.slice(-1).toUpperCase();
  const restLettersWithOutLastLow = word.slice(1, -1).toLowerCase();
  const restLettersLow = word.slice(1).toLowerCase();
  if (word.length % 2 === 0) {
    return `${firstLetterBig}${restLettersWithOutLastLow}${lastLetterBig}`;
  }
  return `${firstLetterBig}${restLettersLow}`;
};

console.log(changedCases("sKInDa"));

// 7th exercise

const compareLetterToLowerCase = function (letter) {
  if (typeof letter !== "string" || letter.length !== 1) {
    return "Wrong type of variable or variable is incorrect";
  }
  const compareCases = letter === letter.toLowerCase();
  const isBig = "Большая буква";
  const isLow = "Маленькая буква";
  const result = compareCases ? isLow : isBig;
  return `${result}`;
};

console.log(compareLetterToLowerCase("F"));

// 8th exercise

const concatenate = function (firstString, secondString) {
  if (typeof firstString !== "string" || typeof secondString !== "string") {
    return "Wrong type of variable";
  }
  return `${firstString} ${secondString}`;
};

console.log(concatenate("Hello", "there"));

// 9th exercise

const checkStringLength = function (incomingString, incomingNumber) {
  if (
    typeof incomingString !== "string" ||
    typeof incomingNumber !== "number"
  ) {
    return "Check the type of your variables";
  }
  const comparison = incomingString.length === incomingNumber;
  const isEqual = `${incomingString}`;
  const isNotEqual = "String is too long or too short";
  const result = comparison ? isEqual : isNotEqual;
  return `${result}`;
};
console.log(checkStringLength("look", 4));
