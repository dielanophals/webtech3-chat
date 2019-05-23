const {
    src,
    dest,
    watch,
    parallel
} = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

function sass2css() {
    return src('./src/sass/app.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(dest('./dist/css/'))
        .pipe(browserSync.stream());
}

function doBrowserSync() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}

function optimizeImages() {
    return src('./src/images/*.*')
        .pipe(imagemin())
        .pipe(dest('./dist/images/'));
}

watch("./src/sass/**/*.scss", parallel(sass2css));

module.exports.images = optimizeImages;
module.exports.default = parallel(sass2css, doBrowserSync, optimizeImages);