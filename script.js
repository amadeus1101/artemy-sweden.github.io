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

let frame = document.getElementById("frame");
let cross = document.getElementById("cross");
let ellipse = document.getElementById("ellipse");
let rumb = document.getElementById("rumb");

// window.addEventListener("scroll", function () {
//   let value = window.scrollY;
//   frame.style.transform = `translateX(${value * 0.1}%) translateY(${
//     value * 1.5
//   }%)`;
//   cross.style.transform = `translateY(${value * 0.9}%)`;
//   ellipse.style.transform = `translateY(${value * 0.6}%)`;
//   rumb.style.transform = `translateX(${value * 0.9}%)`;
// });

window.onload = function () {
  const intro = document.querySelector(".intro");
  if (intro) {
    const forFrame = 1;
    const forCross = 4;
    const forEllipse = 6;
    const forRumb = 2;

    var speed = 0.7;

    let posX = 0,
      posY = 0;
    let coordXpercent = 0,
      coordYpercent = 0;

    function mouseParallaxStyle() {
      const distX = coordXpercent - posX;
      const distY = coordYpercent - posY;

      posX = posX + distX * speed;
      posY = posY + distY * speed;

      frame.style.cssText = `transform: translate(${posX / forFrame}%, ${
        posY / forFrame
      }%);`;
      cross.style.cssText = `transform: translate(${posX / forCross}%, ${
        posY / forCross
      }%);`;
      ellipse.style.cssText = `transform: translate(${posX / forEllipse}%, ${
        posY / forEllipse
      }%);`;
      rumb.style.cssText = `transform: translate(${posX / forRumb}%, ${
        posY / forRumb
      }%);`;

      requestAnimationFrame(mouseParallaxStyle);
    }
    mouseParallaxStyle();

    intro.addEventListener("mousemove", function (e) {
      const introWidth = intro.offsetWidth;
      const introHeight = intro.offsetHeight;

      const coordX = e.pageX - introWidth / 2;
      const coordY = e.pageY - introHeight / 2;

      coordXpercent = (coordX / introWidth) * 100;
      coordYpercent = (coordY / introHeight) * 100;
    });

    let thresholdSets = [];
    for (let i = 0; i < 1.0; i += 0.005) {
      thresholdSets.push(i);
    }
    const callback = function (entries, observer) {
      const scrollTopPercent = (window.pageYOffset / intro.offsetHeight) * 100;
      setParallaxItemsStyle(scrollTopPercent);
    };
    const observer = new IntersectionObserver(callback, {
      threshold: thresholdSets,
    });
    observer.observe(document.querySelector(".about"));

    function setParallaxItemsStyle(scrollTopPercent) {
      frame.parentElement.style.cssText = `transform: translate(0%, ${
        scrollTopPercent * 7
      }%);`;
      cross.parentElement.style.cssText = `transform: translate(0%, ${
        scrollTopPercent * 3
      }%);`;
      ellipse.parentElement.style.cssText = `transform: translate(0%, ${scrollTopPercent}%);`;
      rumb.parentElement.style.cssText = `transform: translate(0%, ${
        scrollTopPercent * 2
      }%);`;
    }
  }
};
