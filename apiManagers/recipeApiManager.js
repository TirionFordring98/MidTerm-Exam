const axios = require('axios');
class RecipeApiManager {
    static getRecipes(ingredient) {
        const apiRecipes = `https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/${ingredient}`;
        return axios.get(apiRecipes)
            .then(response => {
                return response.data.results;
            }
            )
            
        };
    }
    
// }
// Causes Bugs with Mapping
// class RecipeApiManager {
//     static getRecipes(ingredient, page,) {
//         const apiRecipes = `https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/${ingredient}?page=${page}`;
//         return axios.get(apiRecipes)
//             .then(function (response) {
//                 if (page === 1) {
//                 return response.data.results.slice(0, 5);
//             }
//             if (page === 2) {
//                 return response.data.results.slice(5, 10);
//             }
//             if (page === 3) {
//                 return response.data.results.slice(10, 15);
//             }

//         })  
//     }
    
// }

// WORKING NO BUGS WITH MAPING
// class RecipeApiManager {
//     static getRecipes(ingredient, page,) {
//         const apiRecipes = `https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/${ingredient}?page=${page}`;
//         return axios.get(apiRecipes)
//             .then(function (response) {
//          return response.data.results.slice(0, 5);

//         })  
//     }
    
// }
        
module.exports = RecipeApiManager;
