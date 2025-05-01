function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

module.exports = factorial;

// Math perspective of this function !

// factorial(5) =
// 5 * factorial(4) =
// 5 * (4 * factorial(3))
// 5 * (4 * (3 * (factorial(2)))) =
// 5 * (4 * (3 * (2 * 1))) =
// 5 * 4 * 3 * 2 =
// 20 * 6 =
// 120
