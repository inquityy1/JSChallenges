function findMaxNumber(arrayOfNumbers) {
  // Check if the input is an array
  if (!Array.isArray(arrayOfNumbers)) {
    return "Input must be an array";
  }

  // Check if the array is empty
  if (arrayOfNumbers.length === 0) {
    return "Array is empty";
  }

  // Check if all elements are numbers
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (typeof arrayOfNumbers[i] !== "number") {
      return "All elements in the array must be numbers";
    }
  }

  // Find the maximum number
  let maxNumber = arrayOfNumbers[0];
  for (let i = 1; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > maxNumber) {
      maxNumber = arrayOfNumbers[i];
    }
  }

  return maxNumber;
}

module.exports = findMaxNumber;
