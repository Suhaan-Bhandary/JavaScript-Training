/*
    2. 
    Write a function filterObj that will filter out all the keys of a flat object that have objects or arrays using Object.keys and Object.entries. 

    Example:
    let obj = {
     a:"Apple",
     b:["Basketball","Baseball"],
     c: {
      call: "cellphone"
     },
     d: "Dog"
    }
    filterObject(obj) //This should return {a:"Apple", d:"Dog"}
*/

function filterObject(obj) {
  const filteredObject = {};
  for (let [key, value] of Object.entries(obj)) {
    // Here typeof will return "object" for object, array and null
    const isObjectOrArray = typeof value === "object" && value !== null;
    if (!isObjectOrArray) {
      filteredObject[key] = value;
    }
  }

  return filteredObject;
}

let obj = {
  a: "Apple",
  b: ["Basketball", "Baseball"],
  c: {
    call: "cellphone",
  },
  d: "Dog",
};

console.log(filterObject(obj));
