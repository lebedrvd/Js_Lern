const incomingWord = "шалаш";
const isPalindrome = (word) => {
  const incomingWordToLowerCase = word.toLowerCase();
  const reversedWord = incomingWordToLowerCase.split("").reverse().join("");
  if (incomingWordToLowerCase === reversedWord) {
    return "It is a palindrome";
  }
  return "It is not a palindrome";
};

console.log(isPalindrome(incomingWord));
