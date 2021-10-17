const { src, dest } = require('gulp');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));
const { DIST_FOLDER } = require('./config');

module.exports = function css(cb) {
  return src([
    `src/assets/scss/*.scss`,
  ], {
    cwd: '.',
  })
    .pipe(sass.sync())
    .pipe(postcss([
      autoprefixer(),
    ]))
    .pipe(dest(`${DIST_FOLDER}assets/css/`))
    .pipe(cleanCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest(`${DIST_FOLDER}assets/css/`))
}
