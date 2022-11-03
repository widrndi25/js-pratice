const colorSelectButton = document.querySelector("#colorSelectButton");
const body = document.body;

const colorList = ["white", "skyblue", "beige", "yellowgreen"];

function onClickcolorSelectButton(event) {
  event.preventDefault();

  const color1 = colorList[Math.floor(Math.random() * colorList.length)];
  const color2 = colorList[Math.floor(Math.random() * colorList.length)];
  body.style.backgroundImage = `linear-gradient(0.25turn, ${color1}, ${color2})`;
}

colorSelectButton.addEventListener("click", onClickcolorSelectButton);
