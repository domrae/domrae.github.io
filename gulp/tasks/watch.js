const gulp        = require('gulp');
const gutil       = require('gulp-util');
const browserSync = require('browser-sync');
const runSequence = require('run-sequence');

/*
 * Start browsersync task and then watch files for changes
*/

const changeEvent = evt => gutil.log('File', gutil.colors.cyan(evt.path.replace(new RegExp(`/.*(?=/${config.path.assetspath})/`), '')), 'was', gutil.colors.magenta(evt.type));

gulp.task('watch', ['browsersync'], function() {
  gulp.watch(['_scss/**/*.scss']).on('change', function(evt) {
    changeEvent(evt);
    return runSequence('sass');
  });

  gulp.watch(['_js/**/*.js']).on('change', function(evt) {
    changeEvent(evt);
    return runSequence('babel');
  });

  gulp.watch([
	'./*.(md|html|xml)',
	'_layouts/**/*.html', 
	'_posts/**/*.(html|md)', 
	'_includes/*.html',
	'dist/**/*.*'
	]).on('change', function(evt) {
    changeEvent(evt);
    return runSequence('jekyll-rebuild');
  });
});
