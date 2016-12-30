"use strict";

var js = require('agency-pkg-service-parser')(require('./packages.docs'));

(function(){
    $(function() {
        js.parse();
    });
})();
