const { src, dest } = require('gulp');
const { DIST_FOLDER } = require('./config');

module.exports = function publicAssets(cb) {
  return src([
    `**/*`,
  ], {
    cwd: 'public/',
  })
    .pipe(dest(`${DIST_FOLDER}`));
}
