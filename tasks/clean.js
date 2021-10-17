const del = require('del');
const { DIST_FOLDER } = require('./config');

module.exports = function clean() {
  return del([
    `${DIST_FOLDER}`,
  ], {
    force: true,
  });
};
