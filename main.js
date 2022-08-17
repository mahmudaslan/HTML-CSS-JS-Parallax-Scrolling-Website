let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_back = document.getElementById("mountains_back");
let mountains_front = document.getElementById("mountains_front");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let header = document.querySelector("header");
let toTop = document.getElementById("top");
document.addEventListener("scroll", function () {
  let value = window.scrollY;
  stars.style.left = value * 0.5 + "px";
  moon.style.top = value + "px";
  mountains_back.style.top = value * 0.25 + "px";
  text.style.marginRight = value * 3 + "px";
  text.style.marginTop = value * 0.75 + "px";
  btn.style.marginTop = value * 0.75 + "px";
  header.style.marginTop = value * 0.75 + "px";
  if (value >= 600) {
    toTop.style.display = "flex";
  } else {
    toTop.style.display = "none";
  }
});

toTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
