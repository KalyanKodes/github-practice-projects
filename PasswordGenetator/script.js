let generatedPassword = "ddigtosddkd%^&*367";

const copyButton = document.querySelector(".fa-copy");
const submitButton = document.querySelector(".submit");
var capitalLetters = [];
var smallLetters = [];
var symbols = [];
var numbers = [];
var count = 1;
var password = "";

const checkBoxes = document.querySelectorAll("input[type = 'checkbox']");
checkBoxes.forEach((checkBox) => {
  checkBox.checked = true;
});
copyButton.addEventListener("click", copyToClipBoard);
submitButton.addEventListener("click", getLength);
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getLength();
  }
});
function copyToClipBoard() {
  navigator.clipboard
    .writeText(password)
    .then(() => {
      alert("Copied to clipboard");
    })
    .catch(() => {
      alert("Try Again");
    });
}

function getCharacters() {
  for (let i = 65; i <= 90; i++) {
    capitalLetters.push(String.fromCharCode(i));
  }
  for (let i = 33; i <= 47; i++) {
    symbols.push(String.fromCharCode(i));
  }

  for (let i = 97; i <= 122; i++) {
    smallLetters.push(String.fromCharCode(i));
  }
  for (let i = 0; i <= 9; i++) {
    numbers.push(JSON.stringify(i));
  }
}

getCharacters();

function getRandomCapitalLetter() {
  return capitalLetters[Math.floor(Math.random() * capitalLetters.length) + 0];
}
function getRandomSmallLetter() {
  return smallLetters[Math.floor(Math.random() * smallLetters.length) + 0];
}
function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length) + 0];
}
function getRandomNumber() {
  return numbers[Math.floor(Math.random() * numbers.length) + 0];
}

function getRandomFunction() {
  // console.log("Function Called");
  let functions = {
    condition_1: {
      character: getRandomCapitalLetter(),
      checked: checkStatus(0),
    },
    condition_2: {
      character: getRandomSmallLetter(),
      checked: checkStatus(1),
    },
    condition_3: {
      character: getRandomNumber(),
      checked: checkStatus(2),
    },
    condition_4: {
      character: getRandomSymbol(),
      checked: checkStatus(3),
    },
  };
  let randomFunction = randomNumber();
  // console.log("Generated Random Number");
  // console.log(functions)
  // console.log(`Generated Random Number: ${randomFunction}`);
  if (functions[`condition_${randomFunction}`].checked) {
    // console.log("Conditions Success")
    let character = functions[`condition_${randomFunction}`].character;
    // console.log(`Generated Random Character: ${character}`);
    return character;
  } else {
    // console.log("Conditions Failed")
    return getRandomFunction();
  }
}
// getRandomFunction();

function randomNumber() {
  return Math.floor(Math.random() * 4) + 1;
}

function checkAll() {
  let ifChecked = false;

  checkBoxes.forEach((box) => {
    if (box.checked === true) {
      ifChecked = true;
    }
  });

  return ifChecked;
}

function checkStatus(index) {
  return checkBoxes[index].checked;
}

function getLength() {
  let t = checkAll();
  // console.log(`Status : ${t}`);
  if (t === false) {
    alert("Select atleast one constraint");
  } else {
    password = "";
    // console.clear();
    // console.log(`Length of Password Selected: ${document.querySelector('.length').value}`);
    let length = document.querySelector(".length").value;
    if (length != 0 && length <= 20) {
      getPasswordCharacter(length);
    } else {
      if (length == 0) {
        alert("Invalid Input");
      } else if (length > 20) {
        alert("Password Length should be between 1-20");
      }
    }
  }
}

function getPasswordCharacter(maximum) {
  if (count <= maximum) {
    count++;
    password += getRandomFunction();
    getPasswordCharacter(maximum);
  } else {
    count = 1;
    // console.log(`Maximum: ${maximum}`)
    // console.log(`Generated Password: ${password}`);
    // console.log(`Password Length: ${password.length}`);
    renderPassword(password);
  }
}

function renderPassword(password) {
  document.querySelector(".password").innerHTML = password;
}
