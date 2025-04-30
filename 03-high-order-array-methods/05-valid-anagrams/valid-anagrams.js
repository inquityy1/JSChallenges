// function validAnagrams(str1, str2) {
//   const freqCount1 = str1.split("").reduce((acc, char) => {
//     acc[char] = (acc[char] || 0) + 1;
//     return acc;
//   }, {});

//   const freqCount2 = str2.split("").reduce((acc, char) => {
//     acc[char] = (acc[char] || 0) + 1;
//     return acc;
//   }, {});

//   return Object.keys(freqCount1).every(
//     (char) => freqCount1[char] === freqCount2[char]
//   );
// }

function validAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  let arr2 = str2.split("");

  for (let char of str1) {
    const index = arr2.indexOf(char);
    if (index === -1) {
      return false; // character not found = not an anagram
    }
    arr2.splice(index, 1); // remove matched character
  }

  return true;
}

module.exports = validAnagrams;
