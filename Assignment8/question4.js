// 4.  What will be printed to the console?

const testAsyncFunction = () => {
  return Promise.reject("Test static reject");
};

testAsyncFunction()
  .then((res) => {
    console.log("Response in then block", res);
  })
  .catch((err) => console.log("Error in catch block", err));

/* 
    Response:
        Error in catch block Test static reject

    Explanation:
        Promise.reject creates a rejected promise and then the catch block catches the rejected promise and runs the console log. 
*/
