// Write a function that sorts an array of objects by the key that is passed in the second argument, and in the order passed as the 3rd argument.
function sort(arr, orderByKey, order) {
  const direction = order === "asc" ? 1 : -1;

  arr.sort((obj1, obj2) => {
    if (obj1[orderByKey] < obj2[orderByKey]) {
      return -1 * direction;
    } else if (obj1[orderByKey] > obj2[orderByKey]) {
      return 1 * direction;
    }
    return 0;
  });
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

sort(users, "id", "desc"); //Should return users sorted by id in descending order
console.log(users);

sort(users, "first_name", "asc"); //Should return users sorted by first_name in ascending order
console.log(users);
