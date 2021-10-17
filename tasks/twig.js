const { exec } = require('child_process');

module.exports = function twig(cb) {
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
