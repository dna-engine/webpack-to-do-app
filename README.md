### dna.js webpack To Do App

*Sample "To Do" application powered by dna.js and built with webpack*

---
<img src=https://raw.githubusercontent.com/dnajs/dna.js/master/website/static/graphics/dnajs-logo.png
   width=100 align=right>

Build the project by running `build.sh.command` or by using the commands:

    $ cd dnajs-webpack-to-do-app
    $ npm update
    $ npm run build
    $ open dist/index.html

The build process creates the `dist` folder:

    dnajs-webpack-to-do-app/
       dist/
          bundle.css
          bundle.js
          index.html

[webpack](https://webpack.js.org) treats the [dna.js](http://dnajs.org) library as a module.&nbsp;
Use `require` statements in your application to pull in the library's CSS and JavaScript:

    require('dna.js/dna.css');
    var $ = require('jquery');
    var dna = require('dna.js')(window, $);

Then use `dna.registerContext(appName, appObject)` to expose your application so its functions can
be used as callbacks from web pages:

    var myApp = { doSomething: function() { ... } };
    dna.registerContext('myApp', myApp);

See the example code in [app.js](src/js/app.js).

===
[MIT license](LICENSE.txt)
