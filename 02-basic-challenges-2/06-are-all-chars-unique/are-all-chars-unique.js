// function areAllCharactersUnique(string) {
//   const charCount = {};

//   for (let i = 0; i < string.length; i++) {
//     const char = string[i];

//     if (charCount[char]) {
//       return false;
//     }

//     charCount[char] = true;
//   }

//   return true;
// }

function areAllCharactersUnique(string) {
  const charSet = new Set();

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (charSet.has(char)) {
      return false;
    }

    charSet.add(char);
  }

  return true;
}

module.exports = areAllCharactersUnique;
