'use strict';

/**
 * @link https://github.com/gulpjs/gulp/tree/master/docs/recipes
 */

const { src, dest, parallel, watch } = require('gulp');
const { exec } = require('child_process');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

const DIST_FOLDER = 'dist/';

function css(cb) {
    return src(`src/assets/scss/**/*.scss`)
        .pipe(sass.sync())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(dest(`${DIST_FOLDER}assets/css/`))
        // TODO: add css minification.
        .pipe(rename({ extname: '.min.css' }))
        .pipe(dest(`${DIST_FOLDER}assets/css/`))
}

function images(cb) {
    return src(`src/assets/images/**/*`)
        .pipe(dest(`${DIST_FOLDER}assets/images/`))
}

function appIcon(cb) {
    return src(`src/assets/favicon/**/*`)
        .pipe(dest(`${DIST_FOLDER}assets/favicon/`))
}

function twig(cb) {
    return exec('npm run tateru', function (error, stdout, stderr) {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
          if (stdout) {
            console.log(`${stdout}`);
          }
          if (stderr) {
            console.log(`${stderr}`);
          }
    })
}

exports.css = css
exports.images = images
exports.appIcon = appIcon
exports.twig = twig

exports.default = parallel(css, images, twig, appIcon);

/**
 * @link https://gulpjs.com/docs/en/getting-started/watching-files
 */
exports.watch = function() {
    watch(`src/assets/scss/**/*.scss`, css);
    watch(`src/assets/images/**/*`, images);
    watch(`src/assets/favicon/**/*`, appIcon);
    watch(`src/twig/**/*`, twig);
    watch(`src/translations/**/*`, twig);
    watch(`config.json`, twig);
};
