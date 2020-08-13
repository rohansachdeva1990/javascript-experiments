// 2
// Async Callbacks
function getRecipe() {
    // !!!! This is a callback HELL !!!!!
    setTimeout(() => {
        const recipeId = [543, 123, 456, 666];
        console.log(recipeId);
        setTimeout(id => {
            const recipe = {
                title: 'Fresh tomato pasta',
                publisher: 'Rohan'
            };
            console.log(`${id}: ${recipe.title}`);
            setTimeout(publisher => {
                const recipe2 = {
                    title: 'Italian Pizza',
                    publisher: 'Rohan'
                }
                console.log(recipe2);
            }, 1500, recipe.publisher);

        }, 1500, recipeId[2]);
    }, 1500);
}

getRecipe();