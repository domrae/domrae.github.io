const gulp        = require('gulp');
const gutil       = require('gulp-util');
const browserSync = require('browser-sync');
const runSequence = require('run-sequence');

/*
 * Start browsersync task and then watch files for changes
*/

const changeEvent = evt => gutil.log('File', gutil.colors.cyan(evt.path), 'was', gutil.colors.magenta(evt.type));

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch(['./assets/_scss/**/*.scss']).on('change', function(evt) {
    changeEvent(evt);
    return runSequence('sass');
  });

  gulp.watch(['./assets/_js/**/*.js']).on('change', function(evt) {
    changeEvent(evt);
    return runSequence('babel', 'bundle');
  });

  gulp.watch([
	'./*.+(md|markdown|html|xml)',
	'_layouts/**/*.html', 
	'_posts/**/*.+(html|md|markdown)', 
	'_includes/**/*.html',
	'./data.json',
	'./posts.json',
	'./index.json',
	'dist/**/*.*'
	]).on('change', function(evt) {
    changeEvent(evt);
    return runSequence('jekyll-rebuild', 'reload');
  });
});
