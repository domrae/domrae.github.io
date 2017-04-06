var gulp 		= require('gulp');
var browserSync = require('browser-sync');
var sass 		= require('gulp-ruby-sass');
var gutil 		= require('gulp-util');
var prefix 		= require('gulp-autoprefixer');
var cp 			= require('child_process');
var rename 		= require('gulp-rename');
var plumber 	= require('gulp-plumber');
var cssnano 	= require('gulp-cssnano');

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
 * and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return sass('_scss/custom.scss')
        .on('error', sass.logError)
        .pipe(plumber())
        .pipe(gulp.dest('css'))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        // .pipe(browserSync.reload({stream:true}))
        .pipe(cssnano({
            convertValues: {
                length: false
            },
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(rename('custom.min.css'))
        .pipe(gulp.dest('css'))
        .on('error', gutil.log)
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
