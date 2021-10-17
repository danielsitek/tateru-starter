const { src, dest } = require('gulp');
const { DIST_FOLDER } = require('./config');

module.exports = function images(cb) {
  return src([
    `**/*`
  ],
  {
    cwd: 'src/assets/images/',
  })
    .pipe(dest(`${DIST_FOLDER}assets/images/`))
}
