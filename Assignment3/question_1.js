/* 
    1. Declare a variable let age = 25;. Write a series of if else statements that will:

    Print child to the console if age is less than equal to 12.

    Print teen to the console if age is between 13 and 18 (inclusive).

    Print adult to the console if age is above 18

    2. Do the same using switch case.
    3. Declare a variable let arraySize = 25;. 
        Using a for loop, add numbers from one onwards into an array till the arraySize is reached.
    4. Accomplish the same using a while loop.
    5. Can you use return instead of break in loops?
*/

let age = 15;
if (age <= 12) {
  console.log("child");
} else if (age >= 13 && age <= 18) {
  console.log("teen");
} else {
  console.log("adult");
}

switch (true) {
  case age <= 12:
    console.log("child");
    break;
  case age >= 13 && age <= 18:
    console.log("teen");
    break;
  default:
    console.log("adult");
}

const arraySize = 25;

let arr1 = [];
for (let i = 0; i < arraySize; i++) {
  arr1.push(i + 1);
}
console.log(arr1);

let i = 0;
let arr2 = [];
while (i < arraySize) {
  arr2.push(i + 1);
  i++;
}
console.log(arr2);

/* 
Can you use return instead of break in loops? 
=> We can use return instead of break in the case where we want to exit from the switch case and also exit from the function. 
*/
