const ref = {
  input: document.querySelector("#font-size-control"),
  text: document.getElementById("text"),
};

ref.text.style.fontSize = `${ref.input.value}px`;  //щоб не було скачка тексту

ref.input.addEventListener("input", onChangeFontSize);

// !============================
// function onChangeFontSize (e){
//     const fontSize = e.target.value;

//     ref.text.style.fontSize = fontSize + "px";
// }
// !============================
// function onChangeFontSize(e) {
//   const fontSize = e.target.value;

//   ref.text.style.fontSize = `${fontSize}px`;
// }
// !============================
function onChangeFontSize(e) {
  const fontSize = e.target.value;

  ref.text.style.fontSize = `${fontSize}px`;
}

