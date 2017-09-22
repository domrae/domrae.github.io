var gulp 		= require('gulp');
var sass 		= require('gulp-sass');
var gutil 		= require('gulp-util');
var prefix 		= require('gulp-autoprefixer');
var rename 		= require('gulp-rename');
var plumber 	= require('gulp-plumber');
var cssnano 	= require('gulp-cssnano');
var sourcemaps  = require('gulp-sourcemaps');
var clip		= require('gulp-clip-empty-files');
var clone		= require('gulp-clone');
var merge		= require('merge-stream');
var debug		= require('gulp-debug');
var notify		= require('gulp-notify');

/**
 * Compile files from _scss into both _site/css (for live injecting)
 */
var scss_src  = './assets/_scss/**/*.scss';
var scss_dest = './dist/css';

gulp.task('sass', function(){
	var source = gulp.src(scss_src)
	.pipe(plumber())
	.pipe(sourcemaps.init()) // Start Sourcemaps
	.pipe(sass({
		// set output format for compiled css
		outputStyle: 'expanded',
		indentType: 'tab'
		}).on('error', sass.logError))
	.on('error', gutil.log);

	var pipeMaps = source.pipe(clone())
	.pipe(sourcemaps.write('maps'));

	var pipeMinify = source.pipe(clone())
	.pipe(rename({suffix: '.min'}))
	.pipe(cssnano({ // minify with cssnano
		convertValues: {
			length: false
		},
		discardComments: {
			removeAll: true
		},
		discardUnused: {
			// do not minify font-face rule
			// (bug: cssnano completely deletes the rule instead of minifying)
			fontFace: false
		}
	}))
	.pipe(clip());

	return merge(pipeMaps, pipeMinify)
	.pipe(gulp.dest(scss_dest))
	.pipe(debug({title: 'sass-merge:'}));
});
