test( "Assertions test", function() {
  //expect( 2 );  // Set the assertions expected by this test - If the assertions executed is different it will fail.
  //ok( true == false, "That's true" ); // Checks the truthy of the value
  ok( true == true, "That's true" );  // Checks the truthy of the value

  //equal( 10, 11, "That's equal" );  // Checks the equality of the two values, don't check the type.
  //equal( 10, 10, "That's equal" );
  equal( 10, "10", "That's equal" );  // Checks the equality of the two values, don't check the type.
  //equal( [3,4,5], [3,4,5], "That's equal" ); //This will fail because equal only checks for primitives

  deepEqual( 10, 10, "That's deep equal" ); // Checks the equality of the two values, checking type
  deepEqual( [3,4,5], [3,4,5], "That's deep equal" ); // Checks for all the values in the array
  deepEqual( { test: 1 }, { test: 1}, "That's deep equal" );  // Checks for all the values in objects.
});