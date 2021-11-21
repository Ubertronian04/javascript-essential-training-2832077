/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */
document.querySelector("form input").attributes;
document.querySelector("form input").hasAttribute("color");
document.querySelector("form input").setAttribute("color", "magenta");
document.querySelector("form input").removeAttribute("color");
document.querySelector("form input").getAttribute("placeholder");
document
  .querySelector("form input")
  .setAttribute("placeholder", "Old left width");

document.querySelector(".page-header__heading").style.backgroundColor =
  "lightgrey";
document
  .querySelectorAll(".lid-toggle")
  .forEach((item) => (item.style.backgroundColor = "beige"));
document
  .querySelectorAll("article ul li:nth-child(-n+4) span")
  .forEach(
    (item) => ((item.style.display = "flex"), (item.style.color = "burlywood"))
  );
document.querySelector(".page-header p").style;
