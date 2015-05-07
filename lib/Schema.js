var oop = require('iai-oop');
var Validator = require('./Validator');

var exports = module.exports = Object.create( Validator );

exports.constructor = Schema;
exports.constructor.prototype = exports;

function Schema( ){
  return Validator.constructor.call(this);
}

oop( Schema.prototype )
; // End of field's prototype definition
