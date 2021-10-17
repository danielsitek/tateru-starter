const { watch: watchGulp } = require('gulp');
const css = require('./css');
const images = require('./images');
const publicAssets = require('./public-assets');
const tateru = require('./tateru');
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
  ], tateru);

  watchGulp([
    `src/assets/js/**/*`,
  ], webpack);
};
