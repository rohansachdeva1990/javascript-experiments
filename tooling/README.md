# ES6 Tooling

Only relevant when using browser applications,

When using modern javascript we need 2 types of tools:-

1. Transpiler

   - Translator and Compiler
   - Modern JS code to Old Javascript Code
   - Eg. Babel

2. Bundler
   - Combines all JS file to a single js file normally called as bundle.js
   - Minimfies and uglifies our code
   - Eg. Webpack

## Babel

- We need 3 packages to install for babel via npm

  - babel-cli
    - Command line interace that we run from npm
  - babel-core
    - All the logic for transpiling code is present
  - babel-preset-env
    - Plugins for every new JS plugin starting from ES6

- Should be present as development dependencies, not a part of production code

## Webpack
