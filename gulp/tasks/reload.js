var gulp = require('gulp');
var chalk = require('chalk');
var gulpIf = require('gulp-if');
var browserSync = require('browser-sync');

gulp.task('reload', function(){
    return gulp.src('./dist')
    .pipe(browserSync.reload({stream:true}));
});
