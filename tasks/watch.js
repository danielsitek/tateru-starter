const { src, dest, parallel, watch } = require('gulp');
const appIcon = require('./appIcon');
const css = require('./css');
const images = require('./images');
const twig = require('./twig');

/**
 * @link https://gulpjs.com/docs/en/getting-started/watching-files
 */
 module.exports = function watchTask () {
    watch(`src/assets/scss/**/*.scss`, css);
    watch(`src/assets/images/**/*`, images);
    watch(`src/assets/favicon/**/*`, appIcon);
    watch(`src/twig/**/*`, twig);
    watch(`src/translations/**/*`, twig);
    watch(`config.json`, twig);
};
