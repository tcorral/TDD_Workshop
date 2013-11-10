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
    "test should check that sum method returns 5 if we sum a string and 5": function()
    {
      assertTrue( "Test should return 5", 5, this.oCalculator.sum( "pepe", 5 ) );
    },
    "test should check that sum method returns 0 if we sum null and 0": function()
    {
      assertTrue( "Test should return 0", 0, this.oCalculator.sum( 10, -10 ) );
    },
    "test should check that sum method returns 5 if we sum null and 5": function()
    {
      assertTrue( "Test should return 5", 5, this.oCalculator.sum( null, 5 ) );
    },
    "test should check that sum method returns 10 if we sum 5 and 5": function ()
    {
      assertTrue( "Test should return 10", 10, this.oCalculator.sum( 5, 5 ) );
    },
    "test should check that sum method does not returns 10 if we sum 5 and 2": function ()
    {
      assertFalse( "Test should return 7", 10, this.oCalculator.sum( 5, 2 ) );
    },
    "test should check that sum method returns 0 if we don't sum anything": function ()
    {
      assert( "Test should return 0", 0, this.oCalculator.sum() );
    },
    "test should check that substract method returns 5 if we substract 5 from 10": function ()
    {
      assert( "Test should return 5", 5, this.oCalculator.substract( 10, 5 ) );
    },
    "test should check that substract method returns 0 if we don't substract anything": function ()
    {
      assert( "Test should return 0", 0, this.oCalculator.substract() );
    }
  } );
}