'use strict';

var config = require('./config');
var express = require('express');
var cachify = require('connect-cachify');
var sass = require('node-sass-middleware');

var app = express();
var conf = config(__dirname);
var port = process.argv[2] || conf.express.port;

console.log(conf.version);

app.use(cachify.setup(conf.cachify.assets, conf.cachify.settings));
app.use(sass(conf.sass.settings));
app.use(express.static(conf.express.dirs.static));
app.set('views',conf.express.dirs.views);
app.set('view engine', conf.express.views);
app.listen(port);

conf.express.urls.forEach(function(el, i, arr) {
  app.get(el[0], function(req, res) {
    res.render(el[1], {
      title: 'HTML Page Title',
      message: 'Coming straight from the app.js'
    });
  } );
});
