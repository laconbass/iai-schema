var oop = require('iai-oop');
var Validator = require('./Validator');

// Field inherits from Validator
var exports = module.exports = Object.create( Validator );

exports.constructor = Field;
exports.constructor.prototype = exports;

function Field( params ){
  return Validator.constructor.call(this);
}

oop( Field.prototype )
  .set( 'unique', false )
; // End of field's prototype definition

