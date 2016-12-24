"use strict";

require('agency-pkg-element-link/touch-indicator');

var js = require('agency-pkg-service-parser')(require('./packages'));

(function(){
    $(function() {
        js.parse();
    });
})();
