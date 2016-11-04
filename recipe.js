'use strict';

// Create a function addIngredient that accepts three arguments: a recipe object, an
// ingredient name (a key in the object) and the amounts (the value of the ingredient key).
//  The body of the function should add the key-value pair to the recipe object, and then return
//  the updated object.

 function addIngredient(recipe, ingredientName, amounts){
   recipe[ingredientName] = amounts;
   return recipe;
 }

function removeIngredient(recipe, ingredientName){
  delete recipe[ingredientName];
  return recipe
}
function updateIngredient(recipe, ingredientName, amounts){
  recipe[ingredientName] = amounts;
  return recipe;
}

function readRecipe(recipe){
  for(var ing in recipe){
    console.log("this recipe calls for " + recipe[ing] + " of " + ing);

  }
}
