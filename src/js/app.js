// dnajs-webpack-to-do-app

// bundle.css
require('dna.js/dist/dna.css');
require('../css/style.css');
require('../css/todo.css');

// js libraries
const $ =   require('jquery');
const dna = require('dna.js')(window, $);
dna.registerContext('dna', dna);  //expose dna.js utilities to be callbacks from web page

// Application
const todo = {
   add: () => {  //create a task
      const task = {
         title: $('#task-title').val(),
         done:  false
         };
      dna.clone('task', task, { fade: true });
      },
   setup: () => {  //start with one task
      const task = {
         title: 'Check out: dnajs.org',
         done:  false
         };
      dna.clone('task', task);
      }
   };
dna.registerContext('todo', todo);  //expose application functions to be callbacks from web page
