//  Write a functiongroupBy to convert an array of objects into groups based on the specified key:
//
function groupBy(arr, groupByKey) {
  const grouppedObjects = {};

  for (let user of arr) {
    if (grouppedObjects.hasOwnProperty(user[groupByKey])) {
      grouppedObjects[user[groupByKey]].push(structuredClone(user));
    } else {
      grouppedObjects[user[groupByKey]] = [structuredClone(user)];
    }
  }

  return grouppedObjects;
}

let users = [
  {
    id: 1,
    first_name: "Nicki",
    email: "ncrozier0@squarespace.com",
    date_of_birth: "2009/05/09",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Raychel",
    email: "rmcgrady1@cpanel.net",
    date_of_birth: "1996/11/05",
    gender: "Female",
  },
  {
    id: 3,
    first_name: "Demetris",
    email: "dkilshall2@elpais.com",
    date_of_birth: "2018/12/31",
    gender: "Male",
  },
  {
    id: 4,
    first_name: "Amata",
    email: "abraiden3@canalblog.com",
    date_of_birth: "2012/05/23",
    gender: "Female",
  },
];

const grouppedObjects = groupBy(users, "gender");
console.log(grouppedObjects);
