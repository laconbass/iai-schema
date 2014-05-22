var oop = require('iai-oop')
;

module.exports = createField;

function createField( params ){
  return createValidator( oop.extend(Field, params || {}) );
}

// Field's prototype
var Field = {
  // ensure each new entity has an unique value on this field
  // this validation can only be performed at DAO-level
  unique: false
};
