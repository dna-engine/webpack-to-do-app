# webpack-to-do-app
<img src=https://dna-engine.org/graphics/dna-logo.png align=right width=160 alt=logo>

_Sample "To Do" application powered by dna-engine and built with webpack_

[![License:MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://dna-engine.org/license)
[![Build](https://github.com/dna-engine/webpack-to-do-app/workflows/build/badge.svg)](https://github.com/dna-engine/webpack-to-do-app/actions/workflows/run-spec-on-push.yaml)

Build the project by running `build.sh.command` or by using the commands:
```
$ cd webpack-to-do-app
$ npm install
$ npm test
$ open dist/index.html
```

The build process creates a `dist` folder:
```
webpack-to-do-app/
   dist/
      bundle.js
      index.html
```

[webpack](https://webpack.js.org) treats the [dna-engine](https://dna-engine.org) library as a module.&nbsp;
Use `import` statements in your application to pull in the library's CSS and JavaScript:
```javascript
// Imports
import 'dna-engine/dist/dna-engine.css';
import 'dna-engine';
```

Then use `dna.registerContext(appName, appObject)` to expose your application so its functions can
be used as callbacks from web pages:
```javascript
const myApp = {
   doSomething(elem) {
      console.log('myApp.doSomething() was called.');
      },
   };

dna.registerContext('myApp', myApp);  //give dna-engine access to your code
```
Now in the HTML you can wire up a button to call the function:
```html
<button data-on-click=myApp.doSomething>Do Something</button>
```

See the example code in [app.js](src/js/app.js).

---
[MIT License](LICENSE.txt)
