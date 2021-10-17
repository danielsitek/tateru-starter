const path = require('path');
const bundler = require('webpack');
const log = require('fancy-log');
const { ENV_DEVELOPMENT } = require('./config');

module.exports = function webpack (cb) {
  log(`[webpack] env: ${process.env.NODE_ENV}`);

  let isReady = false;

  const settings = {
    mode: process.env.NODE_ENV || ENV_DEVELOPMENT,

    entry: {
      homepage: path.resolve(__dirname, '../src/assets/js/homepage.js')
    },

    output: {
      path: path.resolve(__dirname, '../dist/assets/js'),
      filename: '[name].bundle.js',
      chunkFilename: '[name].chunk.js?v=[contenthash:10]',
      publicPath: '/assets/js/',
    },

    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
      },
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          include: [path.resolve(__dirname, '../src')],
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.svg$/,
          include: [path.resolve(__dirname, '../src')],
          use: {
            loader: 'html-loader',
          },
        }
      ]
    },
  };

  if (process.env.NODE_ENV === ENV_DEVELOPMENT) {
    settings.devtool = 'cheap-module-eval-source-map';
  }

  const logInfo = (msg, prefix = '[webpack]') => {
    msg.split('\n').forEach((line) => {
      let write = line;

      if (prefix) {
        write = `${prefix} ${write}`;
      }

      log(write);
    })
  };

  const onError = (msg) => {
    logInfo(msg, '[webpack] Error:');
  };

  const onWarning = (msg) => {
    logInfo(msg, '[webpack] Warning:');
  };

  const onStats = (msg) => {
    logInfo(msg, '[webpack] Stats:');
  };

  const bundle = bundler(settings, function (error, stats) {
    const jsonStats = stats.toJson();
    const { errors, warnings } = jsonStats;

    if (error) {
      onError(error);
    } else if (errors.length > 0) {
      onError(errors.toString());
    } else if (warnings.length > 0) {
      onWarning(warnings.toString());
    } else {
      onStats(stats.toString({
        colors: true,
        hash: false,
        timings: true,
        assets: true,
        chunks: false,
        chunkModules: false,
        modules: false,
        children: true,
        version: false,
      }));
    }

    if (!isReady) {
      cb();
    }

    return isReady = true;
  });

  return bundle;
};
