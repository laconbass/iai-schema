var iai = require( '../../../../iai' )
  , oop = iai( 'oop' )
;


module.exports = createSchema;




function createSchema( name ){
  return createValidator( Schema );
}

// Schema's prototype
var Schema = {
  validate: function( input, callback ){
  }
};
