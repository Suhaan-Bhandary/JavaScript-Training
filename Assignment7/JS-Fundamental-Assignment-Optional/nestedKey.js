/*
  Advanced Assignments: 
    - Write a function that returns a nested key within an object
*/

function getNestedKeyHelper(data, tokenIdx, tokens) {
  if (tokenIdx === tokens.length) return data;
  if (typeof data !== "object" || data == null) return undefined;

  return getNestedKeyHelper(data[tokens[tokenIdx]], tokenIdx + 1, tokens);
}

function getNestedKey(data, keyStr) {
  const tokens = keyStr.split(".");
  return getNestedKeyHelper(data, 0, tokens);
}

const obj = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
  },
};
