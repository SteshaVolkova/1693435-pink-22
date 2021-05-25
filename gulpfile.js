const gulp = require("gulp");

const styles = require("./gulp/styles");
const scripts = require("./gulp/scripts");
const html = require("./gulp/html");
const images = require("./gulp/images");
const sprite = require("./gulp/sprite");
const copy = require("./gulp/copyAssets");
const test = require("./gulp/test");

const del = require("del");
const sync = require("browser-sync").create();

exports.style = styles;
exports.html = html;
exports.scripts = scripts;
exports.images = images;
exports.sprite = sprite;
exports.copy = copy;
exports.test = test;

// Clean

const clean = () => {
  return del("build");
};

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: "build",
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};

exports.server = server;

// Reload
async function reload() {
  sync.reload();
}

async function streamStyle() {
  gulp.src('build/css').pipe(sync.stream())
}
// Watcher

const watcher = () => {
  gulp.watch("source/less/**/*.less", gulp.series(styles, streamStyle));
  gulp.watch("source/js/*.js", gulp.series(scripts));
  gulp.watch("source/*.html", gulp.series(html, reload));
  gulp.watch("source/icons/*.svg", gulp.series(sprite, reload));
};


// Build

const build = gulp.parallel(html, copy, styles, scripts, sprite, images)

exports.build = gulp.series(clean, build);

exports.default = gulp.series(build, server, watcher);
