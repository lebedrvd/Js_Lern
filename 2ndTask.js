const someArray = ["heLlO", "woRLd"];

const newListOfWords = (words) => {
  return words.map(
    (word) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`
  );
};

console.log(newListOfWords(someArray));
