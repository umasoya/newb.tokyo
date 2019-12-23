const gulp = require('gulp');
const sass = require('gulp-sass');
const webpack= require('webpack-stream');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');

const paths = {
    'sass': { 'src': './assets/sass/*.scss', 'dest': './docs/css' },
    'js':   { 'src': './assets/js/*.js', 'dest': './docs/js' },
};

gulp.task('webpack', () => {
    return gulp.src()
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest(paths.js.dest))
        .pipe(browserSync.stream())
    ;
});

gulp.task('sass', () => {
    return gulp.src(paths.sass.src)
        .pipe(sass({ outputStyle: 'expanded' })).on('error', sass.logError)
        .pipe(sourcemaps.write('./', {
            includeContent: false,
            sourceRoot: '../assets/sass',
        }))
        .pipe(gulp.dest(paths.sass.dest))
        .pipe(browserSync.stream())
    ;
});

gulp.task('bs', () => {
    return browserSync.init(require('./bs-config.js'));
});

gulp.watch('watch', () => {
    gulp.watch(paths.js.src, gulp.task('webpack'));
    gulp.watch(paths.sass.src, gulp.task('sass'));
});

gulp.task('build', gulp.parallel('webpack', 'sass'));
gulp.task('default', gulp.parallel('webpack', 'sass', 'bs'));
