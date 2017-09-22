var gulp        = require('gulp');
var browserSync = require('browser-sync');

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', function() {
    browserSync([
			'./*.(md|html|xml)',
			'_layouts/**/*.(md|html)', 
			'_posts/**/*.*', 
			'_includes/**/*.html', 
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
