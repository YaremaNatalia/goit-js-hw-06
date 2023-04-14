const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredienstEl = document.getElementById("ingredients");

const fragment = document.createDocumentFragment();

for (const ingredient of ingredients) {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  fragment.appendChild(itemEl);
}

ingredienstEl.appendChild(fragment)



