/*
    1. Take the below array of objects. Accomplish the following tasks:
    Write a function filterByName that accepts a string as a parameter and returns an array with only those objects where the first_name field includes that string.
    Use Array.map to return an array of all the email fields.
    Use Array.sort to return the array sorted in descending order by date_of_birth.
    Write a function getById that accepts a number as a parameter and returns the object where the id is equal to that number.
*/

const data = [
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
  {
    id: 3,
    first_name: "Demetris",
    email: "dkilshall2@elpais.com",
    date_of_birth: "2018/12/31",
  },
  {
    id: 4,
    first_name: "Amata",
    email: "abraiden3@canalblog.com",
    date_of_birth: "2012/05/23",
  },
  {
    id: 5,
    first_name: "Venita",
    email: "vheap4@clickbank.net",
    date_of_birth: "2020/10/04",
  },
  {
    id: 6,
    first_name: "Fairfax",
    email: "fcrichton5@merriam-webster.com",
    date_of_birth: "2009/12/23",
  },
  {
    id: 7,
    first_name: "Kathleen",
    email: "kvasyukhnov6@devhub.com",
    date_of_birth: "2010/12/20",
  },
  {
    id: 8,
    first_name: "Sam",
    email: "scorck7@sitemeter.com",
    date_of_birth: "2020/08/30",
  },
  {
    id: 9,
    first_name: "Virgilio",
    email: "vferandez8@e-recht24.de",
    date_of_birth: "2000/09/07",
  },
  {
    id: 10,
    first_name: "Townie",
    email: "tpetyt9@upenn.edu",
    date_of_birth: "2018/09/01",
  },
];

function filterByName(search) {
  return data.filter((element) => element.first_name.includes(search));
}
console.table(filterByName("Virgilio"));

const emails = data.map((element) => element.email);
console.log("Emails:", emails);

const copyData = structuredClone(data);
copyData.sort((recordA, recordB) => {
  const recordDateA = new Date(recordA.date_of_birth);
  const recordDateB = new Date(recordB.date_of_birth);

  return recordDateB.getTime() - recordDateA.getTime();
});
console.table(copyData);

function getById(id) {
  return data.find((element) => (element.id = id));
}
console.log("getById:", getById(9));
