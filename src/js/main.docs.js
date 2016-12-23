"use strict";

require('agency-pkg-service-animation-frame');

var js = require('agency-pkg-service-parser')(require('./packages.docs'));

(function(){
    $(function() {
        js.parse();
    });
})();
