// 7. Complete the above tasks with async/await.

async function func() {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 2000),
    );

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

func();
