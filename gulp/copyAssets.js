const { src, dest } = require("gulp");

function copy() {
  return src(["source/assets/**/*", "!source/assets/**/README"]).pipe(
    dest("build")
  );
}

module.exports = copy;
