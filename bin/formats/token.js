/**
 * Glayzzle : PHP on NodeJS
 * @url http://glayzzle.com
 * @author Ioan CHIRIAC
 * @license BSD-3-Clause
 */

module.exports = {
  handles: function(filename, ext) {
    return filename.substring(0, 9) == '../token/';
  }
  ,run: function(filename, PHP) {
  }
};