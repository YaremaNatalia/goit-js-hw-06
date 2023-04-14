// const categoriesListEl = document.querySelector("#categories");
// const categoriesListEl = document.getElementById("categories");
const itemListEl = document.querySelectorAll('.item')
console.log(`Number of categories: ${itemListEl.length}`);

itemListEl.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);

  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
    