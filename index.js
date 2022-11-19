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
  return Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
};
//console.log(hypotenuse(3, 4));
// 3rd exercise

// 4th exercise

// 5th exercise

// 6th exercise

// 7th exercise

// 8th exercise

// 9th exercise
