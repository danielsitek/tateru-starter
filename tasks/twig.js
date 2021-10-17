const { exec } = require('child_process');
const Logger = require('./helpers/logger');

const log = new Logger({
  namespace: 'twig',
});

module.exports = function twig(cb) {
  return new Promise((resolve) => {
    exec('npm run tateru', function (error, stdout, stderr) {
      
      if (error && stdout) {
        log.error(stdout);
      } else if (stdout) {
        log.info(stdout);
      }
      
      if (stderr) {
        log.error(stderr);
      }

      resolve(cb);
    })
  })
}
