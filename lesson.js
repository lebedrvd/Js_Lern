const incomingNumbers = [1, 2, 3, 4, 5];

const changedNumbers = (numbers) => {
  return numbers.map((number) =>
    number % 2 === 0 ? (number += 1) : (number -= 1)
  );
};

console.log(changedNumbers(incomingNumbers));
