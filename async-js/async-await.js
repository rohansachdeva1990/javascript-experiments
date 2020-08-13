/**
 * ES8 and ES2017 - Async await to easly consume promises
 * 
 * Inside async functions we can have one or more promises
 * 
 */

const getIds = new Promise((resolve, reject) => {
    // Ajax call
    setTimeout(() => {
        resolve([543, 123, 456, 666]);
        //reject('An unexpected error occurred!! ;p');
    }, 1500);
});

const getRecipe = recipeId => {
    return new Promise((resolve, reject) => {
        setTimeout(id => {
            const recipe = {
                title: 'Fresh tomato pasta',
                publisher: 'Rohan'
            };
            resolve(`${id}: ${recipe.title}`);
        }, 1500, recipeId);
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe2 = {
                title: 'Italian Pizza',
                publisher: 'Rohan'
            }
            resolve(`${pub}: ${recipe2.title}`);
        }, 1500, publisher);
    });
};

// by async -> means we are running in the background
// async always returns a promise
async function getRecipesAW() {
    // Await expression will really stop executing the code from this point
    // await can only be run inside async funciton
    const ids = await getIds;
    console.log(ids);
    const recipe = await getRecipe(ids[2]);
    console.log(recipe);
    const related = await getRelated('Rohan Sachdeva');
    console.log(related);

    return recipe;
}

const rec = getRecipesAW();
//console.log(rec);

rec.then(result => console.log(`${result} is the best ever!`));