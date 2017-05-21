'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('src/sass/main.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('src/sass/main.sass', ['sass']);
});
