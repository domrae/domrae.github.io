var gulp 		= require('gulp');
var browserSync = require('browser-sync');
var sass 		= require('gulp-sass');
var gutil 		= require('gulp-util');
var prefix 		= require('gulp-autoprefixer');
var cp 			= require('child_process');
var rename 		= require('gulp-rename');
var plumber 	= require('gulp-plumber');
var cssnano 	= require('gulp-cssnano');
var sourcemaps  = require('gulp-sourcemaps');
var clip		= require('gulp-clip-empty-files');
var clone		= require('gulp-clone');
var merge		= require('merge-stream');
var debug		= require('gulp-debug');
var filesize	= require('gulp-filesize');
var notify		= require('gulp-notify');
	
var jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
	jekyllBuild: '<span style="color: grey"> Running: </span>  $ jekyll build'
};


/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', function() {
    browserSync([
			'./*.md',
			'./*.html',
			'_layouts/*.html', 
			'_posts/*', 
			'_includes/*.html', 
			'_site/js/**/*.js', 
			'_site/css/**/*.css'
		],{
        server: {
            baseDir: '_site'
        },
        port: 30044,
        ui: {
            port: 30045,
            weinre: {
                port: 30046
            }
        },
        notify: {
            styles: {
                top:            'auto',
                bottom:         '0',
                borderRadius:   '5px 5px 0 0',
                background:     'rgba(27,32,50,0.7)',
            }
        }
    });
});

/**
 * Compile files from _scss into both _site/css (for live injecting)
 */
var scss_src  = '_scss/custom.scss';
var scss_dest = 'css';

gulp.task('sass', function(){
	var source = gulp.src(scss_src)
	.pipe(plumber())
	.pipe(notify({
		title: "Sass",
		message: "Sass init."}))
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
	.pipe(debug({title: 'sass-merge:'}))
	.pipe(notify({
		title: "Sass",
		message: "Sass complete. File changed: <%= file.relative %>"}));
});


/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'jekyll-build', 'sass'], function(){
    gulp.watch('_scss/**/*.scss', ['sass']);
    gulp.watch([
	'./*.md',
	'./*.html',
	'about.md', 
	'feed.xml', 
	'_layouts/*.html', 
	'_pages/*', 
	'_posts/*', 
	'_includes/*.html',
    'js/*.js'
	], ['jekyll-rebuild']);
});
