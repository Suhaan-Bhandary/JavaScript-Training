/*
    2. Using promises - write a function that fetches data from an API endpoint (GET https://reqres.in/api/users ).
    Log the data into the console once it is received
*/

const fetchData = () => {
  fetch("https://reqres.in/api/users")
    .then((response) => {
      if (!response.ok) throw Error("Error");
      return response.json();
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

fetchData();
