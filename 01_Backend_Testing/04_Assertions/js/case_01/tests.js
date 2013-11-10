var runTests = function()
{
  try {
    assert( "sum method should return 10 if we sum 5 and 5",
      Calculator.sum( 5, 5 ) === 10 );
    assert( "sum should return 0 if we don't sum anything",
      Calculator.sum() === 0 );
    assert( "substract should return 5 if we substract 5 from 10",
      Calculator.substract( 10, 5 ) === 5 );
    assert( "substract should return 0 if we don't substract anything",
      Calculator.substract() === 0 );
    console.log(assert.count + " tests OK");
  } catch (e) {
    console.log("Test failed: " + e.message);
  }
};
