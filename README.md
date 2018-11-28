# dnajs-webpack-to-do-app
<img src=https://dnajs.org/graphics/dnajs-logo.png align=right width=160 alt=logo>

_Sample "To Do" application powered by dna.js and built with webpack_

[![License:MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://dnajs.org/license)
[![Vulnerabilities](https://snyk.io/test/github/dnajs/dnajs-webpack-to-do-app/badge.svg)](https://snyk.io/test/github/dnajs/dnajs-webpack-to-do-app)
[![Build](https://travis-ci.org/dnajs/dnajs-webpack-to-do-app.svg)](https://travis-ci.org/dnajs/dnajs-webpack-to-do-app)

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
Use `require` statements in your application to pull in the library's CSS and JavaScript:
```javascript
require('dna.js/dna.css');
const $ =   require('jquery');
const dna = require('dna.js')(window, $);
```

Then use `dna.registerContext(appName, appObject)` to expose your application so its functions can
be used as callbacks from web pages:
```javascript
const myApp = { doSomething: function() { ... } };
dna.registerContext('myApp', myApp);
```

See the example code in [app.js](src/js/app.js).

---
[MIT License](LICENSE.txt)
