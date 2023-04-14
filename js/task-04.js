const ref = {
  decrBtn: document.querySelector(`[data-action="decrement"]`),
  incrBtn: document.querySelector(`[data-action="increment"]`),
  valueEl: document.querySelector('#value'),
};

ref.decrBtn.addEventListener("click", onDecrBtnClick);
ref.incrBtn.addEventListener("click", onIncrBtnClick);

let counterValue = 0;

function onDecrBtnClick() {
  counterValue -= 1;
  ref.valueEl.textContent = counterValue;
}

function onIncrBtnClick() {
  counterValue += 1;
  ref.valueEl.textContent = counterValue;
}
