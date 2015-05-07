var assert = require('chai').assert
  , Validator = require('../lib/Validator')
  , Field
;

try {
  Field = require('../lib/Field');
} catch( err ){
  console.error('Field should be required without errors');
  throw err;
}

assert.isTrue(
    Validator.isPrototypeOf( Field ),
    'Field should inherit from Validator'
);

assert.isTrue(
    Validator.isPrototypeOf( Field.constructor() ),
    'Field instances must inherit Validator'
);

assert.isTrue(
    Field.constructor() instanceof Validator,
    'Field instances should be instances of Validator'
);

assert.isTrue(
    Field.constructor() instanceof Field.constructor,
    'Field instances should be instances of Field.constructor'
);

try {
  Field.constructor.call(null);
  throw 'NOT_DETECTED'
} catch( error ){
  if( error == 'NOT_DETECTED' ){
    throw new Error('Field#constructor must throw on wrong contexts');
  } else if( error.code !== 'OOP_BUILD_CONTEXT' ) {
    throw error;
  }
}
