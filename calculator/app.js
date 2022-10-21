const button = document.querySelector(".button-container");
const displayedNumber = document.querySelector("#displayed__text");

let number1 = "";
let number2 = "";
let calculateType = "";
let isOperatebtnClicked = false;

function calculate(num1, calculateType, num2) {
  let result = null;
  if (calculateType === "+") {
    result = num1 + num2;
  } else if (calculateType === "-") {
    result = num1 - num2;
  } else if (calculateType === "*") {
    result = num1 * num2;
  } else if (calculateType === "/") {
    result = num1 / num2;
  }
  return result;
}

function handleClick(event) {
  const target = event.target;
  const className = target.className;
  const value = event.target.innerText;

  if (className === "number" && isOperatebtnClicked === false) {
    number1 = String(number1 + value);
    displayedNumber.innerText = number1;
  } else if (className === "calculate__operate") {
    calculateType = value;
    isOperatebtnClicked = true;
    displayedNumber.innerText = `${number1} ${calculateType}`;
  } else if (className === "number" && isOperatebtnClicked === true) {
    number2 = String(number2 + value);
    displayedNumber.innerText = `${number1} ${calculateType} ${number2}`;
  }

  if (className === "enter double") {
    let result = calculate(Number(number1), calculateType, Number(number2));
    console.log(result);
    displayedNumber.innerText = result;
    number1 = result;
    number2 = "";
  }

  if (className === "clear double") {
    console.log("clear !");
    let number1 = "";
    let number2 = "";
    let calculateType = "";
    let isOperatebtnClicked = false;
    displayedNumber.innerText = "숫자 넣어봐";
  }
}

button.addEventListener("click", handleClick);
