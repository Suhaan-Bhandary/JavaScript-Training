// 5. What will be printed to the console?

const testAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Test Resolve");
    } else {
      reject("Test Reject");
    }
  }).catch((err) => {
    console.log("Error caught in testAsyncFunction", err);
    throw new Error("Forced error");
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
        Response in then block:  Forced error

    Explanation:
    1. When the promise resolves then the resolve function runs and the promise is resolved, 
    then the then chained to it runs so "Response in then block: Test Resolve" is printed.

    2. When the promise rejects then the reject function runs and it goes to the catch which prints "Error caught in testAsyncFunction:  Test Reject", 
    and it throws a new error which is the outer catch catches and prints "Error in catch block:  Error: Forced error".
*/
