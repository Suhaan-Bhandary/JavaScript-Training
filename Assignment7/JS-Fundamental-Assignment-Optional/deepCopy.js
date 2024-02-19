/*
  Advanced Assignments: 
    - Write a recursive function to create a deep clone of a nested object
*/

function deepCopy(data) {
  if (typeof data !== "object" || data === null) return data;

  if (Array.isArray(data)) {
    const copiedArray = [];
    for (let i = 0; i < data.length; i++) {
      copiedArray.push(deepCopy(data[i]));
    }
    return copiedArray;
  } else {
    const copiedObject = {};
    for (let key in data) {
      copiedObject[key] = deepCopy(data[key]);
    }
    return copiedObject;
  }
}

const obj = {
  a: {
    b: ["hi"],
    c: NaN,
    d: null,
  },
};

const objCopy = deepCopy(obj);
console.log(objCopy);

obj.a.b[0] = "";
console.log(objCopy, obj);
