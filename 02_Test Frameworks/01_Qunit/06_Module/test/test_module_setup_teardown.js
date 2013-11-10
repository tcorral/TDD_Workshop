var oCalculator;
module( 'Sum method tests', {
  setup: function()
  {
    oCalculator = new Calculator();
  },
  teardown: function()
  {
    oCalculator = null;
  }
} );
  test( "sum method should return 10 if we sum 5 and 5", function() {
    equal( 10, oCalculator.sum( 5, 5 ) );
  });
  test( "sum should return 0 if we don't sum anything", function() {
    equal( 0, oCalculator.sum() );
  });

module('Substract method tests', {
  setup: function()
  {
    oCalculator = new Calculator();
  },
  teardown: function()
  {
    oCalculator = null;
  }
} );
  test( "substract should return 5 if we substract 5 from 10", function() {
    equal( 5, oCalculator.substract( 10, 5 ) );
  });
  test( "substract should return 0 if we don't substract anything", function() {
    equal( 5, oCalculator.substract( 10, 5 ) );
  });