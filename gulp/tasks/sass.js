var gulp         = require('gulp');
var sass         = require('gulp-sass');
var gutil        = require('gulp-util');
var prefix       = require('gulp-autoprefixer');
var rename       = require('gulp-rename');
var plumber      = require('gulp-plumber');
var sourcemaps   = require('gulp-sourcemaps');
var clip         = require('gulp-clip-empty-files');
var debug        = require('gulp-debug');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano      = require('cssnano');
/**
 * Compile files from _scss into both _site/css (for live injecting)
 */
var scss_src  = './assets/_scss/**/*.scss';
var scss_dest = './assets/_css';
var css_dest = './dist/css';

gulp.task('sass', function(){
	var plugins = [
		autoprefixer({browsers: ['last 1 version']}),
		cssnano({ // minify with cssnano
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
	})
	];

	var source = gulp.src(scss_src)
	.pipe(plumber())
	.pipe(sourcemaps.init()) // Start Sourcemaps
	.pipe(sass({
		// set output format for compiled css
		outputStyle: 'expanded',
		indentType: 'tab'
		}).on('error', sass.logError))
	.on('error', gutil.log)
	.pipe(postcss(plugins))
	.pipe(rename({suffix: '.min'}))
	.pipe(sourcemaps.write('maps'))
	.pipe(clip())
	.pipe(gulp.dest(css_dest))
	.pipe(debug({title: 'sass:'}))
});
