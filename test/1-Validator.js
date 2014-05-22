var assert = require('chai').assert
  , Validator
;

describe('Validator builder', function(){
  it('should be required without errors', function(){
    Validator = require('../lib/Validator');
  });

  it('should expose a function', function(){
    assert.isFunction( Validator );
  });
});
