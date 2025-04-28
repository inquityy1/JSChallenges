function titleCase(word) {
  // Check if the input is a string
  if (typeof word !== "string") {
    throw new Error("Invalid input: word must be a string.");
  }

  // Split the word into an array of characters
  const characters = word.split("");

  // Initialize an empty string to hold the title-cased word
  let titleCasedWord = "";

  // Loop through each character in the array
  for (let i = 0; i < characters.length; i++) {
    // If it's the first character or the previous character is a space, capitalize it
    if (i === 0 || characters[i - 1] === " ") {
      titleCasedWord += characters[i].toUpperCase();
    } else {
      titleCasedWord += characters[i].toLowerCase();
    }
  }

  // Return the title-cased word
  return titleCasedWord;
}

module.exports = titleCase;
