// dnajs-webpack-to-do-app

// Imports
import '../css/app.css';
import $ from 'jquery';
import { dna } from 'dna.js';

// Application
const todo = {

   add() {
      // Creates a new task.
      const task = {
         title: $('#task-title').val(),
         done:  false,
         };
      dna.clone('task', task, { fade: true });
      },

   setup() {
      // Creates initial default task.
      $('#task-title').val('Launch 🚀');
      const task = {
         title: 'Check out: 🧬 dna.js.org',
         done:  false,
         };
      dna.clone('task', task);
      },

   };

// Initialization
dna.initGlobal(window, $);
dna.registerContext('todo', todo);  //expose application functions to be callbacks from web page
