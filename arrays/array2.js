const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
const ingredientsListCopy = Array.from(ingredientsList);
console.log(ingredientsList);
console.log(ingredientsListCopy);
ingredientsList[1].list.shift();
ingredientsList.shift();
console.log(ingredientsList);
console.log(ingredientsListCopy);
