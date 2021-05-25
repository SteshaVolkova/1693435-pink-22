const { src, parallel } = require("gulp");
const htmlValidator = require("gulp-w3cjs");
const gulpHtmlBemValidator = require("gulp-html-bem-validator");

function validateHtml() {
  return src("build/**/*.html")
    .pipe(htmlValidator())
    .pipe(htmlValidator.reporter());
}

function bemCheck() {
  return src("build/**/*.html").pipe(gulpHtmlBemValidator());
}

module.exports = parallel(validateHtml, bemCheck);
