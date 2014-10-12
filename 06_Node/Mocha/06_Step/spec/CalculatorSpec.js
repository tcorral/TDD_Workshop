var should = require( 'should' ),
  Calculator2 = require( '../src/other' ),
  Calculator = require( '../src/Calculator' ),
  sinon = require( 'sinon' );

console.log(Calculator2);
console.log(Calculator);
describe( 'Calculator', function()
{
  it( 'should check that Calculator exist', function()
  {
//    should.exist(Calculator2);
//    should.exist(Calculator2);
  });
  it( 'should check that Calculator.test exist', function()
  {
    should.exist(Calculator.test);
//    should.exist(Calculator2);
  });
});