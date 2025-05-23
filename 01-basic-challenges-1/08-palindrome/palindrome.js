// function isPalindrome(palindrome) {
//   const formattedPalindrome = palindrome
//     .toLowerCase()
//     .replace(/[^a-z0-9]/g, "");
//   const reversedPalindrome = formattedPalindrome.split("").reverse().join("");

//   return formattedPalindrome === reversedPalindrome;
// }

function isPalindrome(str) {
  const formatedStr = removeNonAlphaNumeric(str.toLowerCase());
  const reversedStr = reversedString(formatedStr);

  return formatedStr === reversedStr;
}

function removeNonAlphaNumeric(str) {
  let formattedStr = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphaNumeric(char)) {
      formattedStr += char;
    }
  }

  return formattedStr;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
}

function reversedString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

module.exports = isPalindrome;
