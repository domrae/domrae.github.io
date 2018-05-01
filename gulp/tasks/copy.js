var gulp        = require('gulp');
var chalk       = require('chalk');

gulp.task('copy', function(){
	return gulp.src('./node_modules/systemjs/dist/system.js')
	.pipe(gulp.dest('./dist/js'))
});