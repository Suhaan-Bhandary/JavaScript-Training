/*
    2. Use let and const to create arrays and objects. 
    Try modifying, deleting properties within the array or object.
    What do you expect to happen in both cases? What actually happens in both cases. 
    What is the difference between an object declared as a let or a const variable? 
*/

// Using let and const on array
let arr = [1, 2, 3];

console.log(arr);
arr.push(4);
console.log(arr);

const arr2 = [1, 2, 3];
console.log(arr2);
arr2.push(4);
console.log(arr2);

// Using let and const on objec
let obj = { a: "hi", b: 10 };
console.log(obj);
obj.c = NaN;
console.log(obj);

const obj2 = { a: "hi", b: 10 };
console.log(obj2);
obj2.c = NaN;
console.log(obj2);
delete obj2.a;
console.log(obj2);

/*
What do you expect to happen in both cases? 
=> Change in the array 

What actually happens in both cases.
=> We can update and delete value of both the let and const, as const only makes the object reference const and not the values inside it.

What is the difference between an object declared as a let or a const variable?
=> Defining a object as const, the variable cannot be reassigned to other reference of the object.
eg:
    const obj = {a:"hi"}
    obj = {} // cannot do this
*/
