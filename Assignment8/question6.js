// 6. Create a promise that makes a fetch call, but resolves with the data only 2 seconds after the data has been received in the fetch.

function func() {
  return new Promise((resolve) => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((response) => setTimeout(() => resolve(response), 2000));
  });
}

func()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
