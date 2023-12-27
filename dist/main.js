let currentPage = 1;
function fetchRecipeData(direction) {
    if (direction === 'prev' && currentPage > 1) {
        currentPage--;
    } else if (direction === 'next') {
        currentPage++;
        }

let recipeInput = $("#recipe-input").val();
const excludeDairy = $("#dairyfree").prop("checked");
const excludeGluten = $("#glutenfree").prop("checked");
const excludeNuts = $("#nutsfree").prop("checked");
$('.recipe').remove();

// DEBUGGING

const url = `/recipes/${recipeInput}?excludeDairy=${excludeDairy}&excludeGluten=${excludeGluten}&excludeNuts=${excludeNuts}&page=${currentPage}&limit=5`;

console.log('Current Page:', currentPage);


    $.get(url, function (recipeData) {
        console.log('url:', url);
        // Server response overall

        // debugging
        console.log('recipeData:', recipeData);
        updateUI(recipeData)
    });
    function updateUI(recipes){
    // REVISE HB LATER /*
        // GET TEMPLATE HTML 
        const templateHtml = $('#recipe-template');
        // COMPILE TEMPLATE USING HANDLEBARS
        const template = Handlebars.compile(templateHtml.html());
        // GENERATE THE NEW HTML
        const newHtml = template({recipes: recipes});
        // APPEND THE HTML TO THE PAGE
        $('body').append(newHtml);
        // console.log(newHtml, recipeData);
        document.getElementById('prevBtn').disabled = currentPage === 1;
        document.getElementById('nextBtn').disabled = currentPage === recipes.length <5;
    };
};
$('body').on('click','img' ,function(event) {
    const ingredientAlert = $(this).closest('div').find('ul').find('li').html();
    const ingredientAlertCapitilized = ingredientAlert.charAt(0).toUpperCase() + ingredientAlert.slice(1);
    alert(ingredientAlertCapitilized);
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        fetchRecipeData();
    }
}); 