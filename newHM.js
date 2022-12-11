//1st task

const userList = ["Alex", "alex", "John", "Max", "Petr"];
const blackListedLetters = ["a", "P", "D"];

//let (i)
const newListOfUsers = (users, letters) => {
  const result = [];
  const lowerCasedLetters = [];
  for (let i = 0; i < letters.length; i++) {
    const currentLetter = letters[i];
    lowerCasedLetters.push(currentLetter.toLowerCase());
  }
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const firstLetterToLowerCase = user[0].toLowerCase();
    const isLetterBlackListed = lowerCasedLetters.includes(
      firstLetterToLowerCase
    );
    if (!isLetterBlackListed) result.push(user);
  }
  return result;
};

console.log(newListOfUsers(userList, blackListedLetters));

//while
const newListOfUsers = (users, letters) => {
  const result = [];
  const lowerCasedBlackListedLetters = [];
  let i = 0;
  while (i < letters.length) {
    const currentLetterToLowerCase = letters[i].toLowerCase();
    lowerCasedBlackListedLetters.push(currentLetterToLowerCase);
    i++;
  }
  let n = 0;
  while (n < users.length) {
    const user = users[n];
    const firstLetterToLower = user[0].toLowerCase();
    const isLetterBlackListed =
      lowerCasedBlackListedLetters.includes(firstLetterToLower);

    if (!isLetterBlackListed) {
      result.push(user);
    }
    n++;
  }

  return result;
};

//map + filter
const newListOfUsers = (users, letters) => {
  const lettersToLowerCase = letters.map((letter) => letter.toLowerCase());
  //   const firstUserLetterLow = users.map((user) => user[0].toLowerCase()); создали массив первых букв(приведенных к нижнему регистру) имён пользователей
  //   const isLetterBlackListed = lettersToLowerCase.includes(firstUserLetterLow); попытались с помощью метода includes проверить нахождение массива в массиве, логично получили falls. Метод includes проверяет наличие переменной в массиве!!!
  const result = users.filter(
    (user) => !lettersToLowerCase.includes(user[0].toLowerCase())
  );

  return result;
};

console.log(newListOfUsers(userList, blackListedLetters));

//2nd task

const letters = ["a", "b", "C", "d"];

//let (i)
const newLetters = (incomingLetters) => {
  const result = [];
  for (i = 0; i < incomingLetters.length; i++) {
    const letter = incomingLetters[i];
    const incomingLettersToLowerCase = letter.toLowerCase();
    const isLetterLow = letter === incomingLettersToLowerCase;
    if (isLetterLow) {
      result.push(letter.toUpperCase());
    }
    result.push(letter.toLowerCase());
  }
  return result;
};

//for of
const newLetters = (incomingLetters) => {
  const result = [];
  for (const letter of incomingLetters) {
    const letterToUpperCase = letter.toUpperCase();
    const isLetterBig = letter === letterToUpperCase;
    if (isLetterBig) {
      result.push(letter.toLowerCase());
    } else result.push(letter.toUpperCase());
  }
  return result;
};

//map
const newLetters = (incomingLetters) => {
  return incomingLetters.map((letter) => {
    if (letter === letter.toUpperCase()) {
      letter.toLowerCase();
    }
    letter.toUpperCase();
  });
};

console.log(newLetters(letters));

//3rd task

//map
const listOfNumbers = [1, 2, 3, 4, 5, 6];
const fn = (numbers) => {
  return numbers.map((number, index) => {
    `Value: ${number}, Index: ${index}, Squared: ${number ** 2}`;
  });
};

console.log(fn(listOfNumbers));

//4th task

const inputArray = [1, 23, 14, "HI", "JS", "JSX", "ILOVEU"];

//filter
const fn = (variables) => {
  return variables.filter(
    (variable) => typeof variable === "string" && variable.length % 2 === 0
  );
};

//let (i)
const fn = (variables) => {
  const result = [];
  for (let i = 0; i < variables.length; i++) {
    const variable = variables[i];
    const typeOfVariable = typeof variable === "string";
    const variableLength = variable.length % 2 === 0;
    if (typeOfVariable && variableLength) result.push(variable);
  }
  return result;
};
console.log(fn(inputArray));
