/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-bootstrap-hurry',

  included: function included(app) {
    this._super.included(app);

    var bootstrapPath = path.join(app.bowerDirectory, 'bootstrap/dist');

    // css
    app.import(path.join(bootstrapPath, 'css/bootstrap.css'));
    app.import(path.join(bootstrapPath, 'css/bootstrap.css.map'), { destDir: 'assets' });

    // icons
    app.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.eot'), { destDir: '/fonts' });
    app.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.svg'), { destDir: '/fonts' });
    app.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.ttf'), { destDir: '/fonts' });
    app.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.woff'), { destDir: '/fonts' });
    app.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.woff2'), { destDir: '/fonts' });

    // js
    app.import(path.join(bootstrapPath, 'js/bootstrap.js'));


  }
};
