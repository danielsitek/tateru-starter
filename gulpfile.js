'use strict';

/**
 * @link https://github.com/gulpjs/gulp/tree/master/docs/recipes
 */

const { parallel, series } = require('gulp');
const appIcon = require('./tasks/appIcon');
const css = require('./tasks/css');
const images = require('./tasks/images');
const twig = require('./tasks/twig');
const webpack = require('./tasks/webpack');
const watch = require('./tasks/watch');

const js = function js(cb) {
  return series(
    webpack,
  )(cb);
}

const build = function build(cb) {
  return series(
    parallel(
      css,
      images,
      twig,
      appIcon,
      js,
    ),
  )(cb);
}

const dev = function dev(cb) {
  process.env.NODE_ENV = 'development';

  return series(
    build,
    watch,
  )(cb);
};

module.exports = {
  appIcon,
  build,
  css,
  default: dev,
  images,
  twig,
  js,
  watch,
}
