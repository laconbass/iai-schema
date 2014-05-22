var assert = require('chai').assert
  , Field
;

describe('Field builder', function(){
  it('should be required without errors', function(){
    Field = require('../lib/Field');
  });

  it('should expose a function', function(){
    assert.isFunction( Field );
  });
});
