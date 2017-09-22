var gulp       = require('gulp');
var sourcemaps = require("gulp-sourcemaps");
var babel      = require("gulp-babel");
var concat     = require("gulp-concat");

gulp.task("babel", function () {
  return gulp.src("./assets/js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist/js"));
});