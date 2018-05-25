"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var svgstore = require("gulp-svgstore");
var webp = require("gulp-webp");
var run = require("run-sequence");
var del = require("del");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var uglify = require("gulp-uglify");
var pump = require("pump");

gulp.task("style", function() {
  gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream())
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe (posthtml([
      include()
    ]))
    .pipe(gulp.dest("build"));
});

gulp.task("minjs", function (cb) {
  pump([
      gulp.src("source/js/*.js"),
      uglify(),
      rename(function(path) {
        path.basename += ".min"
      }),
      gulp.dest("build/js")
    ],
    cb
  )
});

gulp.task("serve", function() {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/less/**/*.less", ["style"]);
  gulp.watch("source/*.html", ["html"]).on("change", server.reload);
});

gulp.task("images", function() {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"));
});

gulp.task("sprite", function() {
  return gulp.src("source/img/logo-footer.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp())
    .pipe(gulp.dest("build/img"));
});

gulp.task("copy", function() {
  gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/js/**"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("build", function (done) {
  run(
    "clean",
    "copy",
    "images",
    "sprite",
    "webp",
    "style",
    "minjs",
    "html",
    done)
});
