(function()
{
  'use strict';
  var assert, assertionsCount, output, TestCase, $Results, hRed, hGreen;
  hRed = "#c00";
  hGreen = "#0c0";
  $Results = $( "#results" );
  assert = function ( message, expr ) {
    if (!expr) {
      throw new Error( message );
    }
    assertionsCount++;
    return true;
  };
  assertionsCount = 0;
  output = function( text, color )
  {
    var listItem = $("<li>" + text + "</li>");
    listItem.css( "color", color );
    $Results.append( listItem );
  };

  TestCase = function( name, tests )
  {
    var color, successful, testCount, test;
    successful = 0;
    testCount = 0;

    for( test in tests )
    {
      testCount++;
      try{
        tests[ test ]();
        output( test, hGreen );
        successful++;
      } catch( erError )
      {
        output( test + " failed: " + erError.message, hRed );
      }
    }
    color = successful == testCount ? hGreen : hRed;
    output( "<strong>" + testCount + " tests, " + (testCount - successful) + " failures. Tests executed " + assertionsCount + " assertions</strong>", color);
  };
  window.TestCase = TestCase;
  window.assert = assert;
}());
