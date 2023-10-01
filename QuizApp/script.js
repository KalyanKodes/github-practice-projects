const questionsAndAnswers = {
  question_1: {
    question: "Which language runs in a web browser?",
    option_1: "Java",
    option_2: "C",
    option_3: "Python",
    option_4: "JavaScript",
    validAnswer: "option_4",
  },
  question_2: {
    question: "What does CSS stand for?",
    option_1: "Central Style Sheets",
    option_2: "Cascading Style Sheets",
    option_3: "Cascading Simple Sheets",
    option_4: "Cars SUVs Sailboats",
    validAnswer: "option_2",
  },
  question_3: {
    question: "What does HTML stand for?",
    option_1: "Hypertext Markup Language",
    option_2: "Hypertext Markdown Language",
    option_3: "Hyperloop Machine Language",
    option_4: "Helicopters Terminals Motorboats Lamborghinis",
    validAnswer: "option_1",
  },
  question_4: {
    question: "What year was JavaScript launched?",
    option_1: 1996,
    option_2: 1995,
    option_3: 1994,
    option_4: "None of the above",
    validAnswer: "option_2",
  },
};

var count = 1;
var score = 0;
const questionElement = document.querySelector(".question");
const options = document.querySelectorAll(".option");
const submitButton = document.querySelector(".submitButton");
const replayButton = document.querySelector(".reloadButton");
const radioButtons = document.querySelectorAll("input[type = 'radio']");
const heroContainer = document.querySelector(".hero");
var checkedOpiton = null;

function renderQuestionAndOptions(question) {
  questionElement.innerHTML = question.question;
  options.forEach((option, i) => {
    option.innerHTML = question[`option_${i + 1}`];
  });
  count++;
}

replayButton.addEventListener("click", () => {
  renderScoreCard(score);
  renderQuestionAndOptions(questionsAndAnswers[`question_${count}`]);
});

submitButton.addEventListener("click", () => {
  let status = checkOptionChecked();
  if (status) {
    if (count <= 4) {
      renderQuestionAndOptions(questionsAndAnswers[`question_${count}`]);
      uncheckOption();
    } else {
      uncheckOption();
      renderScoreCard(score);
      score = 0;
      count = 1;
    }
  } else {
    alert("Please select a option");
  }
});

function checkOptionChecked() {
  let i = 0;
  while (i < radioButtons.length) {
    if (radioButtons[i].checked) {
      checkedOpiton = `option_${i + 1}`;
      checkCorrectOption(checkedOpiton);
      return true;
    }
    i++;
  }
  return false;
}

function renderScoreCard(score) {
  document.querySelector(".questionContainer").classList.toggle("hide");
  document.querySelector(".score").classList.toggle("show");
  document.querySelector(
    ".score"
  ).innerHTML = `You answered ${score}/4 questions correctly`;
  heroContainer.classList.toggle("hide");
  submitButton.classList.toggle("hide");
  replayButton.classList.toggle("show");
}

function checkCorrectOption(option) {
  if (option === questionsAndAnswers[`question_${count - 1}`].validAnswer) {
    score++;
  } else {
  }
}

function uncheckOption() {
  radioButtons.forEach((button) => {
    button.checked = false;
  });
}

renderQuestionAndOptions(questionsAndAnswers[`question_${count}`]);
