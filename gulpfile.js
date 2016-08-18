/* File: gulpfile.js */

var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    jade = require('gulp-jade');


gulp.task('jade', function() {
  gulp.src('./views/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./docs/'))
});

gulp.task('default', ['jade'], function() {
  return gutil.log('tasks are running')
});