/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const book1 = new Book(
  "Rick Riordan",
  "Trials of Apollo: The Hidden Oracle",
  "Puffin",
  "May 3, 2016",
  320,
  "Greek Mythology, Young adult fiction, Fantasy",
  true
);

console.log(book1);
console.log("Age since release: ", book1.bookAge());

const book2 = new Book(
  "Federick Ho, David Khor, Yui-P'ng Lam, B.S. Ong",
  "A Comprehensive Guide: H2 Mathematics For 'A' Level, 2nd edition",
  "Marshall Cavendish Education",
  "January 1, 2011",
  374,
  "Education, Mathematics",
  true
);

console.log(book2);
console.log("Age since release: ", book2.bookAge());
