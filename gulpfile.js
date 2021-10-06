// const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const purge = require("gulp-css-purge");
const cleancss = require("gulp-clean-css");
const postcss = require("gulp-postcss");
const autoprefixers = require("autoprefixer");
var gcmq = require("gulp-group-css-media-queries");
const { src, dest } = require("gulp");

const sass = require("gulp-sass")(require("sass"));

const paths = {
  css: {
    src: "./assets/css/*.scss",
    dest: "./assets/deploy-css",
  },
};

const options = {
  scss: {
    outputStyle: "expanded",
    sourceComments: false,
  },
};

function styles() {
  return src(paths.css.src, { sourcemaps: true })
    .pipe(sass(options.scss).on("error", sass.logError))
    .pipe(postcss([autoprefixers()]))
    .pipe(gcmq())
    .pipe(
      purge({
        trim: true,
        shorten: true,
        verbose: true,
      })
    )
    .pipe(
      cleancss({
        level: { 1: { specialComments: 0 }, 2: { removeDuplicateRules: true } },
      })
    )

    .pipe(dest(paths.css.dest, { sourcemaps: true }));
}

exports.style = styles;

///////////////////

const gulp = require("gulp");

gulp.task("autoprefixer", async function () {
  const autoprefixers = require("autoprefixer");
  const sourcemaps = require("gulp-sourcemaps");
  const postcss = require("gulp-postcss");
  return gulp
    .src("./*.css")
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixers()]))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./assets/de"));
});

exports.autoprefix = autoprefixer;
