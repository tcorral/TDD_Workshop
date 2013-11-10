var should = require( 'should' ),
  source = require( '../src/source' ),
  sinon = require( 'sinon' );

describe( 'Calculator', function()
{
  it( 'should check that Calculator exist', function()
  {
    Calculator.should.exist();
  });
});