/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Smartphone from "./SmartPhone.js";

const samsungGalaxyPhone = new Smartphone(
  "Galaxy A70",
  "chrome",
  8,
  "Type C",
  128,
  6,
  "Power Off",
  false
);

const appleiPhone = new Smartphone(
  "iPhone 11",
  "green",
  15,
  "USB-C",
  128,
  8,
  "Power Off",
  true
);

console.log("The samsungGalaxyPhone: ", samsungGalaxyPhone);
console.log("The appleiPhone: ", appleiPhone);

//for testing methods
window.samsungGalaxyPhone = samsungGalaxyPhone;
window.appleiPhone = appleiPhone;
