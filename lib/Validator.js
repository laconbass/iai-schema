var oop = require('iai-oop');

// Expose a function and use a trick to allow `instanceof Validator` checks
// This function is really the Validator prototype, not its constructor
var exports = module.exports = function(){};
// the trick that makes `instanceof` checks possible
exports.prototype = exports;

// re-assign the constructor's prototype to use the exposed prototype
Validator.prototype = exports;

/**
 * @builder {function} Validator: The interface for data validators
 *
 * All properties of the Validator prototype are set to internal - with
 * `oop().internal` - to avoid interferences with Validator properties
 * convention.
 *
 */

function Validator( ){
  //var instance = Object.create( exports.isPrototypeOf(this)? this : exports );
  var instance = oop.build( Validator.prototype, this );
  if( ! exports._types[ instance.constructor.name ] ){
    // TODO notify registers without polluting stderr or stdout
    console.error( 'Registered new Type:', instance.constructor.name );
    exports._types[ instance.constructor.name ] = this;
  }
  return instance;
}

// Definition of Validator's prototype
oop( Validator.prototype )

// make the constructor internal to avoid interferences with convention
.internal( 'constructor', Validator )

// @internal {object} that holds every data type (aka Validator)
.internal( '_types', {} )

/**
  * @internal {function} validate: Determine whatever the input data is valid.
  * @param {*} input: the input data
  * @param {function(err, data)}: the callback function
  * @returns {this}
  *
  * Asynchronously, performs all necessary operations to determine if the
  * given data is valid and passes results on to the callback function.
  */
.internal( 'validate', function( input, callback ){
  throw new Error('Implementations should override Validator#validate');
})

/**
  * @function keys: Returns an array consisting of the enumerable properties
  * of this object, including those inherited from its prototype chain.
  * @returns {Array}
  */
.internal( 'keys', function( ){
  var keys = [];
  for( var property in this ){ keys.push( property ); }
  return keys;
})

/**
  * @function toString: Returns a string representation of the structure.
  *
  * The convention is `<constructor.name [trueBoolProp, property=value, property2=value]>`
  * where `_type` is the value of the internal self-named property.
  * Properties storing booleans appear on first place if are true, or doesn't
  * appear at all if are false.
  */
.internal( 'toString', function( ){
  var keys = this.keys();
  return "<"+(this.constructor.name)+" ["
    + keys
      // filter booleans and remove properties being false
      .filter(function( n ){ return isBool( this[n] ); }, this)
      .filter(function( n ){ return this[n]; }, this)
      .join(', ')
    + keys
      .filter(function( n ){ return ! isBool( this[n] ); })
      .map(function( n ){ return n + '=' + this[n]; }, this)
      .join(', ')
    + "]>"
  ;
})
; // end of Validator definition

/**
 *
 * defines on the destination object as many non-enumerable, writable
 * data descriptors as the enumerable properties the source object has.
 */

function mixin( destination, source ){
  if( !source ){
    return destination;
  }

  destination = oop( destination )
  for( var property in source ){
    destination.internal( property, source[property] );
  }
  return destination.o;
}

/**
 * @function isBool: tests whatever `o` is a boolean.
 * @param {*} o the object to be tested
 */

function isBool( o ){
  return o === true || o === false;
}
