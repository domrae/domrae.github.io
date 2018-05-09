var gulp        = require('gulp');
var chalk       = require('chalk');
var npmPath     = './node_modules/';

gulp.task('copy.systemjs', function(){
	return gulp.src('./node_modules/systemjs/dist/system.js')
	.pipe(gulp.dest('./dist/js'))
});

gulp.task('copy.npm', function(){
	return gulp.src([
		npmPath + 'systemjs-plugin-css/css.js'
	], { base: npmPath })
	.pipe(gulp.dest('./assets/_js/npm'))
});

gulp.task('copy', ['copy.systemjs', 'copy.npm'], function(){});
