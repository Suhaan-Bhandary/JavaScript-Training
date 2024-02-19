/*
  Advanced Assignments: 
    - Write a function to check deep equality of two nested objects/arrays
*/

function isEqual(data1, data2) {
  if (typeof data1 !== typeof data2) return false;
  if (typeof data1 !== "object") return data1 === data2;

  if (data1 == null || data2 == null) {
    return data1 == null && data2 == null;
  }

  const isData1IsArray = Array.isArray(data1);
  const isData2IsArray = Array.isArray(data2);

  if (isData1IsArray && isData2IsArray) {
    if (data1.length !== data2.length) return false;

    for (let i = 0; i < data1.length; i++) {
      if (!isEqual(data1[i], data2[i])) return false;
    }
    return true;
  } else if (!isData1IsArray && !isData2IsArray) {
    const data1Keys = Object.keys(data1);
    const data2Keys = Object.keys(data2);
    if (data1Keys.length !== data2Keys.length) return false;

    for (let key of data1Keys) {
      if (!isEqual(data1[key], data2[key])) return false;
    }
    return true;
  }

  // Case where one is object and other is array
  return false;
}

const obj1 = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: false,
  },
};

const obj2 = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: false,
  },
};

console.log(isEqual(obj1, obj2));
