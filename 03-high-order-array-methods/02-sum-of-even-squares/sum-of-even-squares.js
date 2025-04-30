function sumOfEvenSquares(numbers) {
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  const squaredNumbers = evenNumbers.map((num) => num * num);
  const sumNumbers = squaredNumbers.reduce((total, num) => total + num, 0);

  return sumNumbers;
}

module.exports = sumOfEvenSquares;
