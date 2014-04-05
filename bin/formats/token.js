/**
 * Glayzzle : PHP on NodeJS
 * @url http://glayzzle.com
 * @author Ioan CHIRIAC
 * @license BSD-3-Clause
 */
var fs = require('fs');
var exec = require('child_process').exec;
module.exports = {
  handles: function(filename, ext) {
    return filename.substring(0, 9) == '../token/';
  }
  ,run: function(filename, PHP) {
    var jsTok = PHP.globals.__call(
      'token_get_all',
      fs.readFileSync(filename).toString()
    );
    exec('php ' + __dirname + '/token.php ' + filename, function(error, stdout, stderr) {
      var phpTok = JSON.parse(stdout);
      console.log('JS Output ', jsTok);
      console.log('PHP Output ', phpTok);
    });
    return true;
  }
};