// 1st exercise
const greetings = function sayHello(name) {
  const firstLetter = name.charAt(0).toUpperCase();
  const otherLettersLow = name.slice(1).toLowerCase();
  if (typeof name === "string") {
    if (`${firstLetter}${otherLettersLow}` == "Mark") {
      return `Hi, Mark!`;
    }
    return `Hello, ${firstLetter}${otherLettersLow}!`;
  }
  return "Wrong type of name";
};

console.log(greetings("MARK"));

// 2nd exercise
const hypotenuse = function calculations(n, m) {
  if (typeof n === "number" && typeof m === "number" && n > 0 && m > 0) {
    return Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
  }
  return `Wrong type of number`;
};

console.log(hypotenuse(3, 12));

// 3rd exercise
const minimum = function min(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    if (a == b) {
      return `They are equal. Min = ${a}`;
    }
    return Math.min(a, b);
  }
  return `Wrong type of number`;
};
console.log(minimum(-1, 5));

// 4th exercise

const check = function isEven(incomingNumber) {
  if (typeof incomingNumber !== "number") {
    return "Wrong type of number";
  }
  if (incomingNumber % 2 === 0) {
    return "The number is even";
  }
  return "The number is odd";
};

console.log(check(14));

// 5th exercise

const newString = function deleteChars(incomingString) {
  if (typeof incomingString !== "string") {
    return "Wrong type of variable";
  }
  return incomingString.slice(1, -1);
};

console.log(newString(" this is a string "));

// 6th exercise
const result = function changedCases(word) {
  if (typeof word !== "string" || word.length === 0) {
    return "Wrong type of variable or variable is empty";
  }
  if (word.length % 2 === 0) {
    return `${word[0].toUpperCase()}${word.slice(1, -1).toLowerCase()}${word
      .slice(-1)
      .toUpperCase()}`;
  }

  return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
};

console.log(result("sKInda"));

// 7th exercise

const checkLetterCase = function compareLetterToLowerCase(letter) {
  if (typeof letter !== "string" || letter.length !== 1) {
    return "Wrong type of variable or variable is incorrect";
  }
  if (letter !== letter.toLowerCase()) {
    return "Ты сам придумал фразу для большой буквы? Боже мой";
  }
  return "Нет уж, маленькие буквы - скучно";
};

console.log(checkLetterCase("F"));

// 8th exercise

const twoStrings = function concatenate(firstString, secondString) {
  if (typeof firstString !== "string" || typeof secondString !== "string") {
    return "Wrong type of variable";
  }
  return `${firstString} ${secondString}`;
};

console.log(twoStrings("Hello", "there"));

// 9th exercise

const checkStringLength = function stringAndNumber(
  incomingString,
  incomingNumber
) {
  if (
    typeof incomingString !== "string" ||
    typeof incomingNumber !== "number"
  ) {
    return "Check the type of your variables";
  }
  if (incomingString.length != incomingNumber) {
    return "The length of your string is't equal to your number";
  }
  return `${incomingString}`;
};
console.log(checkStringLength("look", 4));
