// webpack-to-do-app

// Imports
import { dna } from 'dna-engine';
import $ from 'jquery';
import '../css/app.css';

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
         title: 'Check out: 🧬 dna-engine.org',
         done:  false,
         };
      dna.clone('task', task);
      },

   };

// Initialization
dna.initGlobal(window, $);
dna.registerContext('todo', todo);  //expose application functions to be callbacks from web page
