var gulp        = require('gulp'),
	less 	    = require('gulp-less');

var PATH = {
    'LESS_ROOT' 	  : 'src/less',
    'DIST_ROOT' 	  : 'build'
};

gulp.task('default', ['less2css']);

// Compile sass to css
gulp.task('less2css', function () {
  //   gulp.src([PATH.LESS_ROOT + '*.less'])
		// .pipe(less())
		// .pipe(gulp.dest(PATH.DIST_ROOT+'/less'));
});