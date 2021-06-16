# dnajs-webpack-to-do-app
<img src=https://dnajs.org/graphics/dnajs-logo.png align=right width=160 alt=logo>

_Sample "To Do" application powered by dna.js and built with webpack_

[![License:MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://dnajs.org/license)
[![Vulnerabilities](https://snyk.io/test/github/dnajs/dnajs-webpack-to-do-app/badge.svg)](https://snyk.io/test/github/dnajs/dnajs-webpack-to-do-app)
[![Build](https://github.com/dnajs/dnajs-webpack-to-do-app/workflows/build/badge.svg)](https://github.com/dnajs/dnajs-webpack-to-do-app/actions?query=workflow%3Abuild)

Build the project by running `build.sh.command` or by using the commands:
```
$ cd dnajs-webpack-to-do-app
$ npm install
$ npm test
$ open dist/index.html
```

The build process creates a `dist` folder:
```
dnajs-webpack-to-do-app/
   dist/
      bundle.css
      bundle.js
      index.html
```

[webpack](https://webpack.js.org) treats the [dna.js](https://dnajs.org) library as a module.&nbsp;
Use `import` statements in your application to pull in the library's CSS and JavaScript:
```javascript
// Imports
import 'dna.js/dist/dna.css';
import $ from 'jquery';
import 'dna.js';

// Initialization
const dna = window.dna.initGlobal(window, $);
```

Then use `dna.registerContext(appName, appObject)` to expose your application so its functions can
be used as callbacks from web pages:
```javascript
const myApp = {
   doSomething() { ... }
   };
dna.registerContext('myApp', myApp);
```

See the example code in [app.js](src/js/app.js).

---
[MIT License](LICENSE.txt)
