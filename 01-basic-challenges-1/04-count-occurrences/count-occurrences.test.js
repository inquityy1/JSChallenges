const countOccurrences = require("./count-occurrences");

test("Count Occurrences of a Character", () => {
  expect(countOccurrences("helloo", "o")).toBe(2);
  expect(countOccurrences("programming", "m")).toBe(2);
  expect(countOccurrences("banana", "a")).toBe(3);
});
