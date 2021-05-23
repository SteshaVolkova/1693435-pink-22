const { src, dest } = require("gulp");
const rename = require("gulp-rename");
const svgstore = require("gulp-svgstore");

function sprite() {
  return src("source/icons/*.svg")
    .pipe(
      svgstore({
        inlineSvg: true,
      })
    )
    .pipe(rename("sprite.svg"))
    .pipe(dest("build/img"));
}

module.exports = sprite;
