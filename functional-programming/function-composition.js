let input = '   JavaScript   ';

// This is non functional style
let output = 'div' + input.trim() + '</div>';

// This is functional style
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

// This is functional composition
const result = wrapInDiv(toLowerCase(trim(input)));
