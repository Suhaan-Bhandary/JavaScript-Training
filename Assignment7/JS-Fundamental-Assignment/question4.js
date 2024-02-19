// Given 2 arrays with related objects, return a new array where objects having the same id from each of the arrays are merged. Try to achieve it with a complexity - O(n).

function mergeById(arr1, arr2) {
  const idIndex = new Map();
  const arrOfObject = [];

  for (let obj of arr1) {
    arrOfObject.push(structuredClone(obj));
    idIndex.set(obj.id, arrOfObject.length - 1);
  }

  for (let obj of arr2) {
    const idx = idIndex.get(obj.id);
    arrOfObject[idx] = {
      ...arrOfObject[idx],
      ...obj,
    };
  }

  return arrOfObject;
}

let userNames = [
  {
    id: 1,
    first_name: "Nicki",
  },
  {
    id: 2,
    first_name: "Raychel",
  },
  {
    id: 3,
    first_name: "Demetris",
  },
  {
    id: 4,
    first_name: "Amata",
  },
];

let userEmails = [
  {
    id: 2,
    email: "rmcgrady1@cpanel.net",
  },
  {
    id: 1,
    email: "ncrozier0@squarespace.com",
  },
  {
    id: 4,
    email: "abraiden3@canalblog.com",
  },
  {
    id: 3,
    email: "dkilshall2@elpais.com",
  },
];

const mergedArrayObjects = mergeById(userNames, userEmails);
console.table(mergedArrayObjects);
