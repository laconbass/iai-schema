var assert = require('chai').assert
  , Validator
;

try {
  Validator = require('../lib/Validator');
} catch( err ){
  console.error('Validator should be required without errors');
  throw err;
}

assert.isFunction( Validator, 'Validator should expose a function' );

assert.isTrue(
    Validator.constructor() instanceof Validator,
    'Validator#constructor should return an instance of Validator'
);

try {
  Validator.constructor.call(null);
  throw 'NOT_DETECTED'
} catch( error ){
  if( error == 'NOT_DETECTED' ){
    throw new Error('Validator#constructor must throw on wrong contexts');
  } else if( error.code !== 'OOP_BUILD_CONTEXT' ) {
    throw error;
  }
}

assert.isTrue(
    Validator.isPrototypeOf( Validator.constructor() ),
    'Validator instances should inherit Validator'
);

assert.equal(
    Validator.constructor()+'', '<Validator []>',
    'Validator instances string representation must match the convention'
);
