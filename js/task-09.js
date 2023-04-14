function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const ref = {
  changeColorBtn: document.querySelector(".change-color"),
  colorName: document.querySelector(".color"),
};

ref.changeColorBtn.addEventListener("click", onChangeColor);
  

function onChangeColor() {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;

  ref.colorName.textContent = randomColor;
};