// Write a function to filter an array of strings to hold only unique values
function getUniqueStrings(arr) {
  const uniqueStrings = [];
  const visitedStrings = new Set();

  for (let str of arr) {
    if (!visitedStrings.has(str)) {
      uniqueStrings.push(str);
      visitedStrings.add(str);
    }
  }
  return uniqueStrings;
}

const arr = ["apple", "ball", "apple", "ball", "cat", "ball"];
console.log(getUniqueStrings(arr));
