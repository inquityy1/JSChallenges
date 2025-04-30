// function generateHashtag(str) {
//   if (str.length > 140 || str.trim() === "") return false;

//   const words = str.trim().split(/\s+/);

//   const capitalizedWords = words.map(
//     (word) => word.charAt(0).toUpperCase() + word.slice(1)
//   );

//   const hashtag = "#" + capitalizedWords.join("");

//   return hashtag;
// }

function generateHashtag(str) {
  if (str.length > 140 || str.trim() === "") {
    return false;
  }

  const hashtag = str
    .split(" ")
    .reduce(
      (tag, word) => tag + word.charAt(0).toUpperCase() + word.substring(1),
      "#"
    );

  return hashtag;
}

module.exports = generateHashtag;
