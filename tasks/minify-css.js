const { DIST_FOLDER } = require('./config');
const { src, dest } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

module.exports = function minifyCss(cb) {
  return src([
    `*.css`,
    '!*.min.css',
  ], {
    cwd: `${DIST_FOLDER}assets/css/`,
  })
    .pipe(cleanCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest(`${DIST_FOLDER}assets/css/`));
}
