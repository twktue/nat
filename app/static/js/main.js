'use strict';

var main = {
  init: function() {
    console.log('main: initialized');
  }
};

// This is how you start the application.
$( document ).ready(function() {
    main.init();
});
