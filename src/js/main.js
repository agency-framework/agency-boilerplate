"use strict";

require('agency-pkg-service-animation-frame');
require('agency-pkg-element-link/touch-indicator');

var js = require('agency-pkg-service-parser').setup(require('./packages'));

(function(){
    $(function() {
        js.parse();
    });
})();
