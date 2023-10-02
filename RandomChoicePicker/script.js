const inputBox = document.querySelector("#inputBox");
const choiceParentElement = document.querySelector(".choices");

inputBox.focus();

inputBox.addEventListener("keyup", (e) => {
  let options = [];
  let optionsLength;
  if (e.key != "," && e.key != "Enter") {
    options = inputBox.value.split(",");
    options = checkOptions(options);
    optionsLength = options.length;
    // console.log(options)

    renderOptions(options);
  } else if (e.key === "Enter") {
    inputBox.blur();
    inputBox.value = "";
    console.log(lengthOfOptions());
    if (lengthOfOptions() != 0) {
      animateOptions(0);
      pickRandomChoice();
    }
    // animateOptions(0);
  }
});

function checkOptions(array) {
  let filteredOptions = array.filter((item) => {
    if (item != "") {
      return item;
    }
  });
  return filteredOptions;
}

function pickRandomChoice() {
  let toAnimateArray = Array.from(choiceParentElement.children);
  let max = lengthOfOptions();
  let number = genenerateRandom(0, max - 1);
  console.log(number);
  toAnimateArray.forEach((item) => {
    item.style.background = "#F0932B";
  });
  setTimeout(() => {
    toAnimateArray[number].style.background = "#273C75";
  }, 1200);
}

function animateOptions(i) {
  let toAnimateArray = Array.from(choiceParentElement.children);
  if (i < toAnimateArray.length) {
    toAnimateArray[i].style.background = "#273C75";
    setTimeout(() => {
      toAnimateArray[i].style.background = "#F0932B";
      i++;
      animateOptions(i);
    }, 100);
  }
}

function lengthOfOptions() {
  return Array.from(choiceParentElement.children).length;
}

function renderOptions(options) {
  removePreviousOptions(Array.from(choiceParentElement.children));
  for (let i = 0; i < options.length; i++) {
    let element = document.createElement("p");
    element.className = "choice";
    element.innerHTML = options[i];
    choiceParentElement.appendChild(element);
  }
}

function removePreviousOptions(nodes) {
  nodes.forEach((node) => {
    choiceParentElement.removeChild(node);
  });
}

function genenerateRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
