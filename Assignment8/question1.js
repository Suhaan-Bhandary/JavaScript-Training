/* 
    1. Write a function that can stop execution of a function for the number of milliseconds sent as an argument
*/

const sleep = (timeoutMiliseconds) => {
  return new Promise((res) => {
    setTimeout(() => {
      res("Completed");
    }, timeoutMiliseconds);
  });
};

const func = async () => {
  console.log("Printing before");
  await sleep(3000);
  console.log("Printing after");
};

// Executing the function
func();
