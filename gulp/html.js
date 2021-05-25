const { src, dest } = require("gulp");
const htmlmin = require("gulp-htmlmin");

function html() {
  return src("source/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("build"));
}

module.exports = html;
