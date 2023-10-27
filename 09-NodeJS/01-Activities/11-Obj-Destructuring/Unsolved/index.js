// 1. Object
const nodejs = {
  name: 'Node.js',
  type: 'JavaScript runtime environment',
};

      //language' is a const that takes the same value as 'nodejs.name'
const {name:language, type} = nodejs;

console.log(lanuage); // <= prints Node.js
console.log(type); // <= JavaScript runtime environment

// 2. Nested Object
const js = {
  name: 'JavaScript',
  type: 'programming language',
  version: 'ES6',
  tools: {
    frameworks: {
      framework1: 'AngularJS',
      framework2: 'Vue.js',
    },
    libraries: {
      library1: 'jQuery',
      library2: 'React',
    },
  },
};

// selects the two elements in the framework array and puts them in framework1 and framework 2 
const {
  tools: {
    frameworks: { framework1, framework2 },
  },
} = js;

console.log(framework1); // <= AngularJS
console.log(framework2); // <= Vue.js

// 3. Arrays
const languages = ['HTML', 'CSS', 'JavaScript'];

const [markup, style, scripting] = languages; // gets HTML, CSS and JavaScript

const [markup1,, scripting1] = languages; //gets HTML and JavaScript

console.log(markup, style, scripting); // <= HTML CSS JavaScript
console.log(markup); // <= HTML
