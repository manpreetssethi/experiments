var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

var _SRC = {
    SCSS: './src/css/*.scss',
    JS: './src/js/**/*.js'
};
var _DIST = {
    CSS: 'dist',
    JS: 'dist'
};

gulp.task('buildJS', function () {
    return browserify({entries: './src/js/boot.js', extensions: ['.js'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(_DIST.JS));
});

// Compile sass to css
gulp.task('sass2css', function() {
    gulp.src(_SRC.SCSS)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(_DIST.CSS));
});

gulp.task('watch', ['buildJS', 'sass2css'], function () {
    gulp.watch(_SRC.JS, ['buildJS']);
    gulp.watch(_SRC.SCSS, ['sass2css']);
});

gulp.task('default', ['watch']);