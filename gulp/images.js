const { src, dest, series } = require("gulp");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");

function optimizeImages() {
  return src("source/img/**/*.{png,svg,jpg}")
    .pipe(
      imagemin([
        imagemin.mozjpeg({ progressive: true }),
        imagemin.optipng({ optimiztionLevel: 3 }),
        imagemin.svgo(),
      ])
    )
    .pipe(dest("build/img"));
}

function createWebp() {
  return src("source/img/**/*.{png,jpg}")
    .pipe(webp({ quality: 90 }))
    .pipe(dest("build/img"));
}

module.exports = series(optimizeImages, createWebp);
