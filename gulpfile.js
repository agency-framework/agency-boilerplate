"use strict";

var options = require('minimist')(process.argv.slice(2));

var fs = require('fs');
var upath = require('upath');
var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);
var environment = require('agency-environment');
require('agency-server');

gulp.task('default', ['watch', 'server']);

gulp.task('run', function(callback) {
    if (options.heroku && fs.existsSync(upath.join(process.cwd(), environment.serverConfig.root))) {
        runSequence('server', callback);
    } else if (!options.env || options.env === 'development' || options.env === 'package-development') {
        runSequence('prebuild', 'default', callback);
    } else {
        runSequence('build', 'server', callback);
    }
});

process.once('SIGINT', function() {
    process.exit(0);
});
