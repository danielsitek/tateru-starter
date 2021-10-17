const { watch: watchGulp } = require('gulp');
const css = require('./css');
const images = require('./images');
const publicAssets = require('./public-assets');
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
    `public/**/*`,
  ], publicAssets);

  watchGulp([
    `src/twig/**/*`,
    `src/translations/**/*`,
    `config.json`,
  ], twig);

  watchGulp([
    `src/assets/js/**/*`,
  ], webpack);
};
