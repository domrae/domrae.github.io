var gulp       = require('gulp');
var sourcemaps = require("gulp-sourcemaps");
var babel      = require("gulp-babel");
var concat     = require("gulp-concat");
var merge      = require('merge-stream');
var debug      = require('gulp-debug');
var polyfill   = './node_modules/babel-polyfill/dist/polyfill.min.js';

gulp.task("babel", function () {
	var polyfillSrc = gulp.src(polyfill)
	.pipe(gulp.dest("./dist/js"));

	var customJs = gulp.src("./assets/_js/**/*.js")
	.pipe(sourcemaps.init())
	.pipe(babel())
	.pipe(concat("all.js"))
	.pipe(sourcemaps.write("."))
	.pipe(gulp.dest("./dist/js"));

	return merge(polyfillSrc, customJs)
	.pipe(debug({title: 'babel-merge:'}));
});