'use strict';

module.exports = function (ROOT_DIR) {

  return {

    version: '0.0.0',

    ////////////////////////////////////////////////////////////////////////////

    cachify: {
      assets: {
        '/cached/main.css': [
          '/css/reset.css',
          '/css/main.css'
        ],
        '/cached/main.js': [
          '/js/main.js'
        ]
      },
      settings: { root: ROOT_DIR, production: false }
    },

    ////////////////////////////////////////////////////////////////////////////

    sass: {
      settings: {
          src: ROOT_DIR + '/app/sass',
          dest: ROOT_DIR + '/app/static/css',
          outputStyle: 'compressed',
          prefix: '/css',
          debug: true
      }
    },

    ////////////////////////////////////////////////////////////////////////////

    express: {
      port: 2323,
      views: 'ejs',
      dirs: {
        static: ROOT_DIR + '/app/static',
        views:  ROOT_DIR + '/app/views'
      },
      urls: [
        ['/', 'html/index']
      ]
    }

  };

};
