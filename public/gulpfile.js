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
    return src('./sass/style.scss')
        //geeft het door naar een volgend commando
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(dest('./css/'))
        .pipe(browserSync.stream());
}

function doBrowserSync() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}



watch("./sass/**/*.scss", parallel(sass2css));


module.exports.default = parallel(sass2css, doBrowserSync);