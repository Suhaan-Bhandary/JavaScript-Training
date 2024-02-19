/*
    2. What makes a method mutating or non mutating in Javascript? 

       Find out whether each of the following methods are mutating or non-mutating. 
       How can you verify this?:
        - push
        - pop
        - filter
        - find
        - sort
        - map 

    Answers:
    A method is said to be mutating if value of an argument passed to the method get modified.
    Non mutating methods in JavaScript doesn't modify the original argument.
*/

const arr = [1, 2, 3, 4, 5];

// Push Operation
arr.push(6); // push is a mutating method as it updates the arr
console.log(arr);

// Pop Operation
const lastElement = arr.pop(); // pop is a mutating method as it updates the arr
console.log(arr, lastElement);

// filter Operation
const filteredElements = arr.filter((element) => element > 3); // filter is a non mutating method as doesn't modify the original array and return a new array
console.log(arr, filteredElements);

// Find Operation
const element = arr.find((num) => num === 4); // find is a non mutating method as doesn't modify the original array and return the element giving true for callback
console.log(arr, element);

// Sort Operation
arr.sort((num1, num2) => num2 - num1); // Sort is a mutating method as it sorts the arr inplace
console.log("Descending arr:", arr);

// Map Operation
updatedArray = arr.map((num) => num * 2); // map is a non mutating method as it returns a new arr
console.log("Updated Array:", updatedArray);
