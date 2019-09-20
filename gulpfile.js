var gulp = require('gulp');
var fncallback = require('@gerhobbelt/gulp-fncallback');
var path = require('path');
var fs = require('fs');

// Replace all version mentions of Benchmark.JS in the source code
// comments and MarkDown documentation: 
gulp.task('patch-version', function () {
  var pkg = require("./package.json");
  console.log('PlatformJS version: ', pkg.version);
   
  return gulp.src(['./**/*.md', './platform.js'], {base: './'})
    .pipe(fncallback(function (file, enc, cb) {
      var fn = file.relative;
      if (file.isBuffer() && !(fn || '').match(/\bnode_modules\b/)) {
        var content = file.contents.toString('utf8');

        // Replace all version mentions of Benchmark.JS in the source code
        // comments and MarkDown documentation: 
        var content_n = content.replace(/(\bPlatform\b[^\n0-9]+)[0-9]+\.[0-9]+\.[0-9]+(-[0-9]+)?/gi, function (m, p1) {
          return p1 + pkg.version;
        });

        // Update benchmark.js version info: that one won't be caught
        // by the previous regex:
        content_n = content_n.replace(/(\bversion:\s+['"])[0-9]+\.[0-9]+\.[0-9]+(-[0-9]+)?/gi, function (m, p1) {
          return p1 + pkg.version;
        });

        // Report all patched files, i.e. only list the ones which did actually *change*:
        if (content_n !== content) {
          console.log('patching version info in file:\t', file.relative);
          file.contents = new Buffer(content_n);
        }
      }

      cb();
    }))
    .pipe(gulp.dest('./'));
});


 
gulp.task('default', gulp.series('patch-version'));
