function countOccurrences(word, letter) {
  // Check if the inputs are valid
  if (
    typeof word !== "string" ||
    typeof letter !== "string" ||
    letter.length !== 1
  ) {
    throw new Error(
      "Invalid input: word must be a string and letter must be a single character string."
    );
  }

  // Initialize a counter
  let count = 0;

  // Loop through each character in the word
  for (let i = 0; i < word.length; i++) {
    // If the character matches the letter, increment the counter
    if (word[i] === letter) {
      count++;
    }
  }

  // Return the total count of occurrences
  return count;
}

module.exports = countOccurrences;
