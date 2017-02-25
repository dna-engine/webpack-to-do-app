### webpack To Do List

*Sample "To Do" application powered by dna.js and built with webpack*

---
<img src=https://raw.githubusercontent.com/dnajs/dna.js/master/website/static/graphics/dnajs-logo.png align=right>

Steps:

    $ cd webpack-to-do-list
    $ npm update
    $ npm run build
    $ open dist/index.html

The build process creates the `dist` folder:

    webpack-to-do-list/
       dist/
          bundle.css
          bundle.js
          index.html

For a [webpack](https://webpack.js.org) project that depends on the [dna.js](http://dnajs.org)
library, use `require` to pull the library's CSS and JavaScript:

    require('dna.js/dna.css');
    var $ = require('jquery');
    var dna = require('dna.js')(window, $);

Also, use `dna.registerContext()` to expose your application so its functions can be used as
callbacks from web pages:

    var app = { doSomething: function() { ... } };
    dna.registerContext('app', app);

===
[MIT license](http://dnajs.org/license)
