const {src, dest, watch} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

function css(done) {

    src("src/scss/**/*.scss") // 1- identificar el archivo SASS
    .pipe(plumber())
    .pipe(sass()) // 2- compilar el archivo SASS a CSS
    .pipe(dest("build/css")); // 3- guardar el CSS en disco duro

    done();
}

function dev(done) {

    watch("src/scss/**/*.scss", css);
    done();
}

exports.css = css;
exports.dev = dev;

