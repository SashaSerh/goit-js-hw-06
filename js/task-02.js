const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allIngridiens = ingredients => {
  return ingredients.map(ingredient => {
    const ingredientsList = document.createElement('li');
    ingredientsList.classList.add('item');
    ingredientsList.textContent = ingredient;
    return ingredientsList;
  })
}

const elemOfIngredientsList = allIngridiens(ingredients);
const addIngredientsList = document.querySelector('ul');
addIngredientsList.append(...elemOfIngredientsList);


// const allIngridints=ingredients.map(text => {
//    const el= document.createElement('li');
//     el.textContent = text;
//     el.classList.add("item");
//     return el;
//   });
// addIngredientsList.append(...allIngridints) 