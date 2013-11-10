function runTests()
{
  TestCase('Calculator', {
    "sum method should return 10 if we sum 5 and 5": function ()
    {
      assert( "Test should return 10", Calculator.sum( 5, 2 ) === 10 );
    },
    "sum should return 0 if we don't sum anything": function ()
    {
      assert( "Test should return 0", Calculator.sum() === 0 );
    },
    "substract should return 5 if we substract 5 from 10": function ()
    {
      assert( "Test should return 5", Calculator.substract( 10, 5 ) === 5 );
    },
    "substract should return 0 if we don't substract anything": function ()
    {
      assert( "Test should return 0", Calculator.substract() === 0 );
    }
  } );
}