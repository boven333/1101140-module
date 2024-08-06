const { src, dest, watch, parallel } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const minifyCSS = require("gulp-csso");
function css() {
    return src("assets/scss/*.scss")
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(dest("css"));
};

function watchFiles() {
    watch("./assets/scss/**/*", css);
};

exports.css = css; 
exports.watch = watch;
exports.default = parallel(css, watchFiles);