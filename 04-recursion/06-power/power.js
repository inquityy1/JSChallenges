function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  return base * power(base, exponent - 1);
}

module.exports = power;

// Math perspective of this function !
// power(2, 4) =
// 2 * power(2, 3) =
// 2 * 2 * power(2, 2) =
// 2 * 2 * 2 * power(2, 1) =
// 2 * 2 * 2 * 2 * 1
// 16
