const { src, dest } = require("gulp");
const terser = require("gulp-terser");
const concat = require("gulp-concat");

function scripts() {
  return src("source/js/*.js", { sourcemaps: true })
    .pipe(terser())
    .pipe(concat("app.min.js"))
    .pipe(dest("build/js", { sourcemaps: "." }));
}

module.exports = scripts;
