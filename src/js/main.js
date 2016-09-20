"use strict";

var js = require('./services/parser/js');
require('./services/touchIndicator');

var VectorBuffer = require('./base/VectorBuffer');
var Vector = require('./base/Vector');

(function(){
    $(function() {
        js.parse();

        var buffer = new VectorBuffer(2);

        buffer.add(new Vector().resetByAngle(-120));
        buffer.add(new Vector().resetByAngle(-140));
        var average1 = buffer.getAverage();
        console.log(average1.angle());

        buffer.add(new Vector().resetByAngle(-160));
        var average2 = buffer.getAverage();
        console.log(average2.angle());

        console.log('TEST', average2.angleRelativeTo(average1));

        var v1 = new Vector();
        var v2 = new Vector();
        console.log('angle 0 -> 90 should be 90', v1.resetByRad(Math.PI/2).angleRelativeTo(v2.resetByRad(0)));
        console.log('angle 90 -> 0 should be -90', v1.resetByRad(0).angleRelativeTo(v2.resetByRad(Math.PI/2)));
        console.log('angle 340 -> 20 should be 40', v1.resetByAngle(20).angleRelativeTo(v2.resetByAngle(340)));
        console.log('angle 200 -> 160 should be -40', v1.resetByAngle(160).angleRelativeTo(v2.resetByAngle(200)));
    });
})();
