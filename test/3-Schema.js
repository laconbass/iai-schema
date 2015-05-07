var assert = require('chai').assert
  , Validator = require('../lib/Validator')
  , Schema
;

try {
  Schema = require('../lib/Schema');
} catch( err ){
  console.error('Schema should be required without errors');
  throw err;
}

assert.deepEqual(
  Schema, require('..'), 'Schema should be the module entry point'
);

assert.isTrue(
    Validator.isPrototypeOf( Schema ),
    'Schema should inherit from Validator'
);

assert.isTrue(
    Validator.isPrototypeOf( Schema.constructor() ),
    'Schema instances must inherit Validator'
);

assert.isTrue(
    Schema.constructor() instanceof Validator,
    'Schema instances should be instances of Validator'
);

assert.isTrue(
    Schema.constructor() instanceof Schema.constructor,
    'Schema instances should be instances of Schema.constructor'
);

try {
  Schema.constructor.call(null);
  throw 'NOT_DETECTED'
} catch( error ){
  if( error == 'NOT_DETECTED' ){
    throw new Error('Schema#constructor must throw on wrong contexts');
  } else if( error.code !== 'OOP_BUILD_CONTEXT' ) {
    throw error;
  }
}
