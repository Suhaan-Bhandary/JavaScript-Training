// Write a function mapBy to convert an array of objects into an object mapped by the specified key:

function mapBy(arr, specifiedKey) {
  const resultObject = {};

  for (let obj of arr) {
    // structuredClone is used to deep copy the value and remove the reference from the object
    resultObject[obj[specifiedKey]] = structuredClone(obj);
  }

  return resultObject;
}

let users = [
  {
    id: 1,
    first_name: "Nicki",
    email: "ncrozier0@squarespace.com",
    date_of_birth: "2009/05/09",
  },
  {
    id: 2,
    first_name: "Raychel",
    email: "rmcgrady1@cpanel.net",
    date_of_birth: "1996/11/05",
  },
];

const obj = mapBy(users, "first_name");
console.log(obj);
