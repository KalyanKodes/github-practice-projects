const marks = document.querySelectorAll(".fa-solid");
const rotaingBall = document.querySelector(".rotatingBall");
const container = document.querySelector(".contentContainer");
marks.forEach((mark) => {
  mark.addEventListener("click", () => {
    rotaingBall.classList.toggle("show");
    container.classList.toggle("rotate");
  });
});

window.addEventListener("scroll", () => {
  if (scrollY > 30) {
    rotaingBall.style.scale = "0";
  } else {
    rotaingBall.style.scale = "1";
  }
  if (container.classList.contains("rotate")) {
    rotaingBall.classList.toggle("show");
    container.classList.toggle("rotate");
  }
});
