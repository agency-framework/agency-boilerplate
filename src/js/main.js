"use strict";

var js = require('agency-pkg-service-parser')(require('./packages'));

global.picture.ready(function() {
    console.log('PICTURE READY');
});

js.parse();
