const express = require('express');
const router = express.Router();
const RecipeApiManager = require("../apiManagers/recipeApiManager");
const {filterRecipes} = require("../apiManagers/recipes");

router.get('/recipes/:ingredient', (req, res) => {
    const ingredient = req.params.ingredient;
    const excludeDairy = req.query.excludeDairy === 'true';
    const excludeGluten = req.query.excludeGluten === 'true';
    const excludeNuts = req.query.excludeNuts === 'true';   
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    RecipeApiManager.getRecipes(ingredient)
        .then((recipes) => {
        const pageIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const paginatedRecipes = recipes.slice(pageIndex, endIndex);

        const filteredRecipe = filterRecipes(paginatedRecipes, excludeDairy, excludeGluten, excludeNuts);
        res.send(filteredRecipe);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send('No Data Mr.DC');
    });
})
        


module.exports = router;
