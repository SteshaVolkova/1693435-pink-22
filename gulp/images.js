const { src, dest, series } = require("gulp");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const webp = require("gulp-webp");

const imageDestination = "build/img";

function optimizeImages() {
  return src("source/img/**/*.{png,svg,jpg}")
    .pipe(newer(imageDestination))
    .pipe(
      imagemin([
        imagemin.mozjpeg({ progressive: true }),
        imagemin.optipng({ optimiztionLevel: 3 }),
        imagemin.svgo(),
      ])
    )
    .pipe(dest(imageDestination));
}

function createWebp() {
  return src("source/img/**/*.{png,jpg}")
    .pipe(webp({ quality: 90 }))
    .pipe(dest(imageDestination));
}

module.exports = series(optimizeImages, createWebp);
