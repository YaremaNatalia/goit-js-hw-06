const ref = {
  input: document.querySelector("#font-size-control"),
  text: document.getElementById('text'),
};

ref.input.addEventListener("input", onChangeFontSize);


function onChangeFontSize (e){
    const fontSize = e.target.value;

    ref.text.style.fontSize = fontSize + "px";
}

