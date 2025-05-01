function reverseString(string) {
  if (string === "") {
    return "";
  }

  console.log(string.substr(1));

  return reverseString(string.substr(1)) + string[0];
}

module.exports = reverseString;
