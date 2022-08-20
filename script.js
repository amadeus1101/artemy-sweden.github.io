window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector(".menu");
let nav = document.querySelector(".navigation");
function menuClick() {
  menu.classList.toggle("active-menu");
  nav.classList.toggle("active-nav");
}

let frame = document.querySelector(".deco-frame");
let cross = document.querySelector(".deco-cross");
let ellipse = document.querySelector(".deco-ellipse");
let rumb = document.querySelector(".deco-rumb");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  frame.style.transform = `translateX(${value * 0.1}%) translateY(${
    value * 1.5
  }%)`;
  cross.style.transform = `translateY(${value * 0.9}%)`;
  ellipse.style.transform = `translateY(${value * 0.6}%)`;
  rumb.style.transform = `translateX(${value * 0.9}%)`;
});
