/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const smartphone = {
  model: "Galaxy A70",
  battery: 8,
  charger: "Type C",
  storage: 128,
  phoneRAM: 6,
};

const towel = {
  length: 28.7,
  width: 28.7,
  thickness: 0.06,
  material: "cloth",
};

const shelf = {
  height: 2.4,
  length: 0.53,
  width: 0.26,
  compartment: {
    quantity: 5,
    volume: 0.014,
    hasLock: true,
    item: {
      type: "Clothing",
      quantity: 15,
    },
  },
};

console.log("Smartphone", smartphone);
console.log("Towel", towel);
console.log("Shelf", shelf);
console.log("Compartments in the shelf", shelf.compartment);
console.log("Smartphone model:", smartphone.model);
console.log("Number of compartments in shelf: ", shelf.compartment.quantity);
