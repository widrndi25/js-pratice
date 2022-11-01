const generateInput = document.querySelector("#gernerate-form input");
const guessInput = document.querySelector("#guess-form input");
const guessButton = document.querySelector("#guess-form button");
const numberresult = document.querySelector("#result span");
const matchResult = document.querySelector("#result h2");
const percentage = document.querySelector("#result .percentage");

let matchNumber = 0;
let tryNumber = 0;

function onclickGuessBtn() {
  const inputNumber = parseInt(guessInput.value);
  const maxNumber = parseInt(generateInput.value);
  const randomNumber = Math.ceil(Math.random() * generateInput.value);

  tryNumber += 1;

  if (maxNumber >= 0) {
    if (inputNumber === randomNumber) {
      matchResult.innerText = "당연히 당신이 기계보다 우월해야겠지요!";
      matchNumber += 1;
    } else {
      matchResult.innerText = "이런! 기계가 당신보다 우월하군요!";
    }
  } else {
    matchResult.innerText =
      "초등학생들은 음수를 모르니 음수 사용은 자제하시지요";
  }
  numberresult.innerText = `위대한 사용자 당신께서 고르신 숫자 ${inputNumber}, 한낱 깡통에 불과한 기계가 고른 숫자 ${randomNumber}`;
  percentage.innerText = `지금까지 맞추는데 성공한 확률 : ${Math.ceil(
    (matchNumber / tryNumber) * 100
  )}%`;
}

guessButton.addEventListener("click", onclickGuessBtn);
