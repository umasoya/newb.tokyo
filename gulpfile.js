const gulp = require('gulp');
const webpack= require('webpack-stream');
const browserSync = require('browser-sync').create();

const paths = {
    'js':   { 'src': './assets/js/*.js', 'dest': './docs/js' },
};

gulp.task('webpack', () => {
    return gulp.src(paths.js.src)
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest(paths.js.dest))
        .pipe(browserSync.stream())
    ;
});

gulp.task('bs', () => {
    return browserSync.init(require('./bs-config.js'));
});

gulp.watch('watch', () => {
    gulp.watch(paths.js.src, gulp.task('webpack'));
});

gulp.task('build', gulp.parallel('webpack'));
gulp.task('default', gulp.parallel('webpack', 'bs'));
