const gulp = require('gulp');
const webpack = require('webpack-stream');
gulp.task('default', function () {
    return gulp
        .src('src/app.js')
        .pipe(
            webpack({
                mode: 'production',
                entry: {
                    app: ['./src/app.js'],
                },
                output: {
                    filename: './[name].js',
                },
            })
        )
        .pipe(gulp.dest('dist/'));
});
