function runTests()
{
  TestCase('Calculator', {
    setup: function()
    {
      this.oCalculator = new Calculator();
    },
    teardown: function()
    {
      delete this.oCalculator;
    },
    "test sum method should return 10 if we sum 5 and 5": function ()
    {
      assert( "Test should return 10", this.oCalculator.sum( 5, 5 ) === 10 );
    },
    "test sum should return 0 if we don't sum anything": function ()
    {
      assert( "Test should return 0", this.oCalculator.sum() === 0 );
    },
    "test substract should return 5 if we substract 5 from 10": function ()
    {
      assert( "Test should return 5", this.oCalculator.substract( 10, 5 ) === 5 );
    },
    "test substract should return 0 if we don't substract anything": function ()
    {
      assert( "Test should return 0", this.oCalculator.substract() === 0 );
    }
  } );
}