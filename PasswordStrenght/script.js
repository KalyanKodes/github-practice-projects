const passwordInputBox = document.getElementById("passwordInput");

var letters = "";
var blur = 20;
passwordInputBox.focus();
passwordInputBox.addEventListener("keydown", (e) => {
  changeBackground(passwordInputBox.value.length);
  if (e.keyCode === 8 || e.keyCode === 17) {
    changeBackground(passwordInputBox.value.length);
  }
});

function changeBackground(length) {
  document.body.style.backdropFilter = `blur(${20 - length * 2}px)`;
}
