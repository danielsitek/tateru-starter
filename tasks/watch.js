const { watch: watchGulp } = require('gulp');
const appIcon = require('./appIcon');
const css = require('./css');
const images = require('./images');
const twig = require('./twig');
const webpack = require('./webpack');

/**
 * @link https://gulpjs.com/docs/en/getting-started/watching-files
 */
module.exports = function watch () {

  watchGulp([
    `src/assets/scss/**/*.scss`,
  ], css);

  watchGulp([
    `src/assets/images/**/*`,
  ], images);

  watchGulp([
    `src/assets/favicon/**/*`,
  ], appIcon);

  watchGulp([
    `src/twig/**/*`,
    `src/translations/**/*`,
    `config.json`,
  ], twig);

  watchGulp([
    `src/assets/js/**/*`,
  ], webpack);
};
