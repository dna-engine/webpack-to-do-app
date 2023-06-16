# webpack-to-do-app
<img src=https://dna-engine.org/graphics/dna-logo.png align=right width=160 alt=logo>

_Sample "To Do" application powered by dna-engine and built with webpack_

[![License:MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://dna-engine.org/license)
[![Vulnerabilities](https://snyk.io/test/github/dna-engine/webpack-to-do-app/badge.svg)](https://snyk.io/test/github/dna-engine/webpack-to-do-app)
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

// Initialization
const dna = globalThis.dna.initGlobal(window);
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
