// 3. What will be printed to the console when the promise resolves and when it rejects?
const testAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Test Resolve");
    } else {
      reject("Test Reject");
    }
  }).catch((err) => {
    console.log("Error caught in testAsyncFunction: ", err);
  });
};

testAsyncFunction()
  .then((res) => {
    console.log("Response in then block: ", res);
  })
  .catch((err) => console.log("Error in catch block: ", err));

/*
    Promise Resolves:
        Response in then block:  Test Resolve    

    Promise Rejected:
        Error caught in testAsyncFunction:  Test Reject
        Response in then block:  undefined

    Explanation:
    1. When the promise resolves then the resolve function runs and the promise is resolved, 
    then the then chained to it runs so "Response in then block: Test Resolve" is printed.

    2. When the promise rejects then the reject function runs and it goes to the catch which prints "Error caught in testAsyncFunction:  Test Reject", 
    and after this it goes to outer then as no new error is thrown from the function.
*/
