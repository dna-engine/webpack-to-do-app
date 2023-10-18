// webpack-to-do-app

// Imports
import { dna } from 'dna-engine';
import '../css/app.css';

// Application
const todo = {

   add() {
      // Creates a new task.
      const titleElem = globalThis.document.getElementById('task-title');
      const task = {
         title: titleElem.value,
         done:  false,
         };
      dna.clone('task', task, { fade: true });
      console.log(dna.getModels('task'));  //display array of tasks in the js console
      },

   setup() {
      // Creates initial default task.
      const titleElem = globalThis.document.getElementById('task-title');
      titleElem.value = 'Launch 🚀';
      const task = {
         title: 'Check out: 🧬 dna-engine.org',
         done:  false,
         };
      dna.clone('task', task);
      },

   };

// Initialization
dna.registerContext('todo', todo);  //expose application functions to be callbacks from web page
dna.dom.onReady(todo.setup);
