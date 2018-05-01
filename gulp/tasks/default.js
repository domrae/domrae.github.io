var gulp        = require('gulp');
var chalk       = require('chalk');
var runSequence = require('run-sequence');

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', function(){
  console.log(chalk.magenta.inverse('» Building for development...'))
  runSequence(
  	'copy',
  	['sass', 'babel'],
  	'bundle',
  	'jekyll-build',
  	'watch'
	);
});
