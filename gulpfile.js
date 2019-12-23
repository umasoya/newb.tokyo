const gulp = require('gulp');
const sass = require('gulp-sass');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

const paths = {
    'sass': { 'src': './assets/sass/*.scss', 'dest': './docs/css' },
    'js':   { 'src': './assets/js/*.js', 'dest': './docs/js' },
};

gulp.task('webpack', () => {
    return webpackStream(webpackConfig, webpack)
        .pipe(gulp.dest(paths.js.dest))
    ;
});

gulp.task('sass', () => {
    return gulp.src(paths.sass.src)
        .pipe(sass({ outputStyle: 'expanded' })).on('error', sass.logError)
        .pipe(gulp.dest(paths.sass.dest))
    ;
});
