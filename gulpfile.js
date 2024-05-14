//npm install --save-dev gulp sass gulp-sass gulp-sourcemaps gulp-babel @babel/core @babel/preset-env gulp-minify gulp-autoprefixer gulp-clean-css gulp-rename gulp-concat-util

//**npm init - through the motions

//** Install the gulp package in your devDependencies
//https://gulpjs.com/docs/en/getting-started/quick-start/
//npm install --save-dev gulp

//**Gulp Babel
//https://www.npmjs.com/package/gulp-babel
//npm install --save-dev gulp-babel @babel/core @babel/preset-env gulp-minify

//** Gulp SASS */
//https://www.npmjs.com/package//gulp-sass
//npm install sass gulp-sass gulp-sourcemaps --save-dev

//** AutoPrefixer */
//npm install --save-dev gulp-autoprefixer

//**Clean Up (Minify) CSS
//npm i --save-dev gulp-clean-css

//**Essential STyles */
//npm i --save-dev gulp-rename gulp-concat-util

// *************√
// => BABEL FOR JS
// *************
const gulp = require("gulp")
const babel = require("gulp-babel")
const minify = require("gulp-minify")

gulp.task("babel", () => {
  return gulp
    .src(["wp-content/themes/HomeSolutions/dev/js/scripts.js", "wp-content/themes/HomeSolutions/dev/js/modules/*.js"])
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(minify())
    .pipe(gulp.dest("wp-content/themes/HomeSolutions/js"))
})

// *************
// => SASS FOR SCSS
// *************
const sass = require("gulp-sass")(require("sass"))
const autoprefixer = require("gulp-autoprefixer")
const cleanCSS = require("gulp-clean-css")
const sourcemaps = require("gulp-sourcemaps")

gulp.task("sass", () => {
  return (
    gulp
      .src([`wp-content/themes/HomeSolutions/dev/sass/style.scss`, `wp-content/themes/HomeSolutions/dev/sass/critical.scss`])
      .pipe(sass().on("error", sass.logError))
      .pipe(
        autoprefixer({
          cascade: false,
        })
      )
      // .pipe(cleanCSS({ compatibility: "ie8" }))
      // .pipe(sourcemaps.init())
      // .pipe(sourcemaps.write("/maps"))
      .pipe(gulp.dest("wp-content/themes/HomeSolutions"))
  )
})

var rename = require("gulp-rename")
var concat = require("gulp-concat-util")

gulp.task("styles:critical", function () {
  return (
    gulp
      .src("wp-content/themes/HomeSolutions/critical.css")
      // wrap with style tags
      .pipe(concat.header("<style>"))
      .pipe(concat.footer("</style>"))
      // convert it to a php file
      .pipe(
        rename({
          basename: "criticalCSS",
          extname: ".php",
        })
      )
      // insert it Wordpress theme folder
      .pipe(gulp.dest("wp-content/themes/HomeSolutions"))
  )
})

// Then execute task with bracket '()' instead of '[]'
gulp.task("watch", function () {
  gulp.watch(["wp-content/themes/HomeSolutions/dev/sass/*.scss", "wp-content/themes/HomeSolutions/dev/sass/components/*.scss", "wp-content/themes/HomeSolutions/dev/sass/components/*/*.scss", "wp-content/themes/HomeSolutions/dev/sass/modules/*.scss", "wp-content/themes/HomeSolutions/dev/sass/modules/*/*.scss", "wp-content/themes/HomeSolutions/dev/sass/components/*.scss"], gulp.parallel("sass"))
  gulp.watch("wp-content/themes/HomeSolutions/critical.css", gulp.parallel("styles:critical"))
  gulp.watch(["wp-content/themes/HomeSolutions/dev/js/*.js", "wp-content/themes/HomeSolutions/dev/js/modules/*.js"], gulp.parallel("babel"))
})
