import { compose, pipe } from 'lodash/fp';

let input = '   JavaScript   ';

// This is functional style
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

// Also an example of higher order functions
// But, here we still need to read the order of functions from right to left
const transformWithCompose = compose(wrapInDiv, toLowerCase, trim);
transformWithCompose('   JavaScript   ');

// Here the order is maintained
const transformWithPipe = pipe(trim, toLowerCase, trim);
transformWithPipe('   JavaScript   ');
