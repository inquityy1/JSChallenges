function flattenArray(nestedArr) {
  let result = [];

  for (const item of nestedArr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

module.exports = flattenArray;
