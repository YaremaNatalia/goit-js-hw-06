function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const ref = {
  form: document.getElementById("controls"),
  boxesContainer: document.getElementById("boxes"),
};

ref.boxesContainer.classList.add("boxes-list");

console.dir(ref.form);
ref.form.children[1].addEventListener("click", onCreateBoxes);
ref.form.children[2].addEventListener("click", onDestroyBoxes);

function onCreateBoxes() {
  const amount = parseInt(ref.form.children[0].value);

  let htmlEl = "";
  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;
    const color = getRandomHexColor();
    htmlEl += `<div style="width:${size}px; height:${size}px; background-color:${color};"></div>`;
  }

  ref.boxesContainer.insertAdjacentHTML("afterbegin", htmlEl);
}

function onDestroyBoxes() {
  ref.boxesContainer.innerHTML = "";
}

