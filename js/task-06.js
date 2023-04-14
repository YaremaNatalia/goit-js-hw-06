const ref = {
  input: document.querySelector("#validation-input"),
};

ref.input.addEventListener("blur", onCheckInputValidation);

const dataLength = ref.input.getAttribute("data-length");

function onCheckInputValidation(event) {
  const lengthValue = event.target.value.trim().length;
  if (lengthValue === Number(dataLength)) {
    ref.input.classList.add("valid");
    ref.input.classList.remove("invalid");
  } else {
    ref.input.classList.add("invalid");
    ref.input.classList.remove("valid");
  }
}


