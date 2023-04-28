gsap.fromTo(
  ".scrollDown",
  { y: "0%", opacity: 1, duration: 0 },
  { y: "50%", opacity: 0, duration: 3, repeat: -1 }
);
const body = document.querySelector("body");
let isScrolling;

window.addEventListener("scroll", function () {
  window.clearTimeout(isScrolling);
  body.classList.add("is-scrolling");

  isScrolling = setTimeout(function () {
    console.log("Scrolling has stopped.");
    body.classList.remove("is-scrolling");
  }, 100);
});
