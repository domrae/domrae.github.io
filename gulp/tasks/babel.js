var gulp       = require('gulp');
var sourcemaps = require("gulp-sourcemaps");
var babel      = require("gulp-babel");
var concat     = require("gulp-concat");
var merge      = require('merge-stream');
var debug      = require('gulp-debug');
var polyfill   = './node_modules/babel-polyfill/dist/polyfill.min.js';
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');

gulp.task("babel", function () {
	var polyfillSrc = gulp.src(polyfill)
	.pipe(plumber())
	.pipe(gulp.dest("./dist/js"));

	var rawJs = gulp.src("./assets/_js/*.js")
	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(
		babel({
		  "presets": ["env"]
		})
	)
	.pipe(uglify({
		mangle: {
			reserved: ['$', 'document', 'window']
		}
	}))
	.pipe(sourcemaps.write("."))
	.pipe(gulp.dest("./dist/js"));

	var moduleJs = gulp.src("./assets/_js/modules/*.js")
	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(
		babel({
		  "presets": ["env"]
		})
	)
	.pipe(sourcemaps.write("."))
	.pipe(gulp.dest("./dist/js/modules"));

	var npmJs = gulp.src("./assets/_js/npm/**/*.js")
	.pipe(plumber())
	.pipe(uglify({
		mangle: false
	}))
	.pipe(gulp.dest("./dist/js/npm"));

	// var customJs = gulp.src("./assets/_js/**/*.js")
	// .pipe(sourcemaps.init())
	// .pipe(
	// 	babel({
	// 	  "presets": ["env"]
	// 	})
	// )
 //    .pipe(jshint())
 //    .pipe(jshint.reporter('default'))
	// .pipe(uglify({
	// 	mangle: {
	// 		reserved: ['$', 'document', 'window']
	// 	}
	// }))
	// .pipe(concat("all.js"))
	// .pipe(sourcemaps.write("."))
	// .pipe(gulp.dest("./dist/js"));

	return merge(polyfillSrc, rawJs, moduleJs, npmJs)
	.pipe(debug({title: 'babel-merge:'}));
});
