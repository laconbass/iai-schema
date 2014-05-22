var assert = require('chai').assert
  , Schema
;

describe('Schema builder', function(){
  it('should be required without errors', function(){
    Schema = require('..');
  });

  it('should expose a function', function(){
    assert.isFunction( Schema );
  });
});
