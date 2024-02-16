/* 
    1. Declare a variable - let a;. 
    On another line assign any value you like to a. 
    Log the value of a before and after assignment. Try doing the same with const.
    Use the typeof operator to find the types of different variables. 
    Specially note what the typeof operator returns for arrays, null values and NaN.
    How can you find if a variable is an array or NaN besides typeof?
*/

/*
    let a;
    console.log(a);
    a = "hello";
    console.log(a);
*/

/* 
// Re declare error
    const a;
    console.log(a);
    a = "hello";
    console.log(a); 
*/

function trial() {}

console.log(typeof "hi");
console.log(typeof 1);
console.log(typeof false);
console.log(typeof [1, 2]);
console.log(typeof { a: "hi" });
console.log(typeof NaN);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof trial);

// There are two ways to check for NaN,
// isNaN converts the given input to number and then check if it is NaN
// Number.isNaN directly checks if the given is NaN or not
console.log("isNaN:", isNaN(NaN));
console.log("Number.isNaN:", Number.isNaN(NaN));

console.log("isNaN:", isNaN("Hello"));
console.log("Number.isNaN:", Number.isNaN("Hello"));

// Checking if the given input is an array or not
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray("hi"));
