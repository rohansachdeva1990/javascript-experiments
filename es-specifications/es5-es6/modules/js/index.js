import str from './models/Search';
// import {
//     add,
//     multiply,
//     ID as id
// } from './views/searchView'

import * as searchView from './views/searchView'

// console.log(`Using imported function ${add(id, 2)} and ${multiply(3,5)} and ${str}`);
console.log(`Using imported function ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(3,5)} and ${str}`);
