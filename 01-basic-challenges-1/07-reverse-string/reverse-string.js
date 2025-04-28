function reverseString(word) {
  const reversed = word.split("").reverse();

  return reversed.join("");
}

module.exports = reverseString;
