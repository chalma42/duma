const { src, dest, watch, parallel } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;

function browsersync() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
}

function scripts() {
    return src([
        '',
        'main.js'
    ])
}


function styles() {
    return src('app/scss/style.scss')
        .pipe(sass())
        //.pipe(concat('style.min.css')) //переименовывает конечный файл .css
        .pipe(dest('app/css'))
        .pipe(browserSync.stream());
}

function watching() {
    watch(['app/scss/**/*.scss'], styles)
    watch(['app/*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.watching = watching;
exports.browserSync = browsersync;

exports.default = parallel(browsersync, watching);