const { src, dest } = require('gulp');
const gulpWebpack = require('webpack-stream');
const webpack = require('webpack');
const named = require('vinyl-named');

function defaultTask() {
    return src(['src/*.js'])
        .pipe(named())
        .pipe(gulpWebpack(require('./webpack.config.js'), webpack))
        .pipe(dest('dist/'));
}

exports.default = defaultTask;
