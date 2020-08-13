/**
 * What are promises? (Similar to Completeable future)
 * - Object that keeps track about whether a certain event has happened already or not 
 * - Determine what happens after the event has happened;
 * - Implements the concept of a future value that we're expecting
 * 
 * Eg. Get me the data in the background
 * 
 * A promise can have different state:
 * 
 *  Pending ---- Event Happens ----> Settled/Resolved -----> Fulfilled or Rejected
 * 
 */

// Call resolve if the promise was successful and reject if failed
// resolve (return data)
// new promise takes and executor function
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

// How to consume promise then and catch
getIds.then(ids => {
        // Handles fullfilled promise
        console.log(ids);
        return getRecipe(ids[2]);
    })
    .then(recipe => {
        console.log(recipe);
        return getRelated('RS');
    })
    .then(relatedRecipe => {
        console.log(relatedRecipe);
    })
    .catch(error => {
        console.log(error);
    });