const { exec } = require('child_process');
const log = require('fancy-log');

const logInfo = (msg, prefix = '[twig]') => {
  msg.split('\n').forEach((line) => {
    let write = line;

    if (prefix) {
      write = `${prefix} ${write}`;
    }

    log(write);
  })
};

module.exports = function twig(cb) {
  return new Promise((resolve) => {
    exec('npm run tateru', function (error, stdout, stderr) {
      let type = 'Info';

      if (error) {
        type = 'Error';
      }
      if (stdout) {
        logInfo(stdout, `[twig] ${type}:`);
      }
      if (stderr) {
        logInfo(stderr, '[twig] Error:');
      }

      resolve(cb);
    })
  })
}
