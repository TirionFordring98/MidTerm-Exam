const faker = require('faker');


const dairyIngredients = ["Cream", "Cheese", "Milk", "Butter", "Creme", "Ricotta", "Mozzarella", "Custard", "Cream Cheese"];
const glutenIngredients = ["Flour", "Bread", "bread", "Spaghetti", "Biscuits", "Beer"]; 
const nutsIngredients = ["Nuts", "Nut"];// THE INGREDIENT FACTORS
// GIPHY API FOR FOOD GIFS

function createRecipe(recipe){
    return {
        idMeal: recipe.idMeal,
        title: recipe.title,
        strCategory: recipe.strCategory,
        href: recipe.href,
        thumbnail: recipe.thumbnail,
        chefName: faker.name.firstName() + ' ' + faker.name.lastName(),
        ratingNumber: faker.datatype.number({ min: 1 , max: 5}),
        ingredients: recipe.ingredients,
    };
}
function filterRecipes(recipes, excludeDairy, excludeGluten, excludeNuts) {
    console.log(typeof recipes);
    recipes = recipes.map((recipe) => createRecipe(recipe));
    recipes = recipes.filter(recipe => {
        // Check if the recipe should be excluded based on the checkbox values
        const hasDairy = excludeDairy && recipe.ingredients.some((ingredient) => dairyIngredients.includes(ingredient));
        const hasGluten = excludeGluten && recipe.ingredients.some((ingredient) => glutenIngredients.includes(ingredient));
        const hasNuts = excludeNuts && recipe.ingredients.some((ingredient) => nutsIngredients.some(nutIng => ingredient.includes(nutIng)));
        return !hasDairy && !hasGluten &&!hasNuts 
    });
    return recipes;
} 
module.exports = {filterRecipes};

