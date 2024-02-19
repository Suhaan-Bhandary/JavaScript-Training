/*
    1. How will you create a new copy of the object below while updating the value of address.details[0] to "5"?
*/

let data = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
  },
};

// We are using structuredClone to deep copy the data
// If we directly assign data to objectCopy then it will copy the reference to the object, and updating the 5 will affect both the objects
let objectCopy = structuredClone(data);
objectCopy.address.details[0] = "5";

console.log("Original object:", data);
console.log("Updated object:", objectCopy);
