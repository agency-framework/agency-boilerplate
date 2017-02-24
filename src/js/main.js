"use strict";

require('jquery/src/event');
require('jquery/src/event/trigger');
require('jquery/src/data');

var js = require('agency-pkg-service-parser')(require('./packages'));
js.parse();

global.picture.ready(function() {
    console.log('READY');
});
