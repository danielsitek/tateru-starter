'use strict';

/**
 * @link https://github.com/gulpjs/gulp/tree/master/docs/recipes
 */

const { parallel, series } = require('gulp');
const appIcon = require('./tasks/appIcon');
const css = require('./tasks/css');
const images = require('./tasks/images');
const twig = require('./tasks/twig');

const build = function build(cb) {
    return series(
        parallel(
            css,
            images,
            twig,
            appIcon,
        ),
    )(cb);
}

module.exports = {
    appIcon,
    build,
    css,
    default: build,
    images,
    twig,
}
