window.addEventListener("scroll", function () {
  var header = document.querySelector("header");

  var sliderSpeed = 30;
  header.classList.toggle("sticky", window.scrollY > 0);
  if (window.scrollY > window.innerHeight) {
    header.classList.add("header-second");
  } else {
    header.classList.remove("header-second");
  }
  // if (
  //   window.scrollY > window.innerHeight * 1.1 &&
  //   window.screenY < window.innerHeight * 2
  // ) {
  //   if (window.innerWidth < 800 && window.innerWidth > 600) {
  //     sliderSpeed = 20;
  //   }
  //   skills.style.marginLeft = `-${
  //     (window.scrollY / window.innerWidth) * 20 - 16
  //   }%`;
  // }
});
var isWorksHidden = true;
function showWorksFunc() {
  let workItem = document.querySelectorAll(".hidden-item");
  let btn = document.querySelector(".show-btn");
  if (isWorksHidden) {
    for (let i = 0; i < workItem.length; i++) {
      workItem[i].style.display = "block";
    }
    btn.innerHTML = "Close";
  } else {
    for (let i = 0; i < workItem.length; i++) {
      workItem[i].style.display = "none";
    }
    btn.innerHTML = "Show more";
  }
  isWorksHidden = !isWorksHidden;
}
let skills = document.getElementById("first-ph");
let menu = document.querySelector(".menu");
let nav = document.querySelector(".navigation");
function menuClick() {
  menu.classList.toggle("active-menu");
  nav.classList.toggle("active-nav");
}
function menuClose() {
  menu.classList.remove("active-menu");
  nav.classList.remove("active-nav");
}

function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: "smooth",
  });
}
let link1 = document.getElementById("link1");
let link2 = document.getElementById("link2");
let link3 = document.getElementById("link3");
let link4 = document.getElementById("link4");
let sec1 = document.getElementById("intro");
let sec2 = document.getElementById("about");
let sec3 = document.getElementById("works");
let sec4 = document.getElementById("contact");

link1.addEventListener("click", function () {
  scrollTo(sec1);
});
link2.addEventListener("click", function () {
  scrollTo(sec2);
});
link3.addEventListener("click", function () {
  scrollTo(sec3);
});
link4.addEventListener("click", function () {
  scrollTo(sec4);
});

let frame = document.getElementById("frame");
let cross = document.getElementById("cross");
let ellipse = document.getElementById("ellipse");
let rumb = document.getElementById("rumb");
let logo = document.querySelector(".intro__logo");
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
    // const forLogo = 11;

    var speed = 0.7;

    let posX = 0,
      posY = 0;
    let coordXpercent = 0,
      coordYpercent = 0;

    function mouseParallaxStyle() {
      if (window.innerWidth > 768) {
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
      }

      // logo.style.cssText = `transform: translate(${posX / forLogo}%, ${
      //   posY / forLogo
      // }%);`;

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
        scrollTopPercent * 8
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

function changeTheme() {
  let switcher = document.querySelector(".switcher");
  switcher.classList.toggle("light");
}
