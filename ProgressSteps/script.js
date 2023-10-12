const step = document.querySelector(".step");
const prevButton = document.querySelector(".previousButton");
const nextButton = document.querySelector(".nextButton");
const progressSteps = document.querySelectorAll(".progress");

var moveCount = 1;

function enabelButton(button) {
  button.disabled = false;
  button.classList.remove("disable");
}

function disableButton(button) {
  button.disabled = true;
  button.classList.add("disable");
}

nextButton.addEventListener("click", () => {
  step.classList.add(`move_${moveCount}`);

  stepsFocus(moveCount);
  moveCount++;
  if (moveCount === 4) {
    disableButton(nextButton);
  } else {
    enabelButton(prevButton);
  }
});
prevButton.addEventListener("click", () => {
  moveCount--;
  step.classList.remove(`move_${moveCount}`);
  stepsFocus(moveCount - 1);
  if (moveCount < 4) {
    enabelButton(nextButton);
  }
  if (moveCount === 1) {
    disableButton(prevButton);
  } else {
    enabelButton(nextButton);
  }
});

function stepsFocus(count) {
  progressSteps.forEach((progress) => {
    progress.style.border = "3px solid #E0E0E0";
  });
  progressSteps.forEach((progress, index) => {
    if (index <= count) {
      progress.style.border = "3px solid #3498DB";
    }
  });
}

disableButton(prevButton);
