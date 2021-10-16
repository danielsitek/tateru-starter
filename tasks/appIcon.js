const { src, dest } = require('gulp');
const { DIST_FOLDER } = require('./config');

module.exports = function appIcon(cb) {
    return src(`src/assets/favicon/**/*`)
        .pipe(dest(`${DIST_FOLDER}assets/favicon/`))
}
