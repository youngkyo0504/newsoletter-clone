// const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const purge = require("gulp-css-purge");
const cleancss = require("gulp-clean-css");
const postcss = require("gulp-postcss");
// exports.default = () =>
//   gulp
//     .src("./assets/css/*.css")
//     .pipe(
//       autoprefixer({
//         cascade: false,
//       })
//     )
//     .pipe(gulp.dest("./dist"));

// ("use strict");

// var gulp = require("gulp");
// var sass = require("gulp-sass")(require("sass"));
// const autoprefixer = require("gulp-autoprefixer");

// console.log(gulp);

// function buildStyles() {
//   return gulp
//     .src("s.scss")
//     .pipe(sass().on("error", sass.logError))
//     .pipe(
//       autoprefixer({
//         cascade: false,
//       })
//     )
//     .pipe(gulp.dest("."));
// }

// gulp
//   .src("./assets/**/*.scss")
//   .pipe(sass().on("error", sass.logError))
// .pipe(
//   autoprefixer({
//     cascade: false,
//   })
// )
//   .pipe(gulp.dest("./dist"));
// exports.buildStyles = buildStyles;
// exports.watch = function () {
//   gulp.watch("s.scss", ["sass"]);
// };
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
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
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
// const gulp = require("gulp");

// gulp.task("autoprefixer", () => {
//   const autoprefixer = require("autoprefixer");
//   const sourcemaps = require("gulp-sourcemaps");
//   const postcss = require("gulp-postcss");

//   return gulp
//     .src("./dist/css/*.css")
//     .pipe(sourcemaps.init())
//     .pipe(postcss([autoprefixer()]))
//     .pipe(sourcemaps.write("."))
//     .pipe(gulp.dest("./dest"));
// });

// exports.style = autoprefixer;
