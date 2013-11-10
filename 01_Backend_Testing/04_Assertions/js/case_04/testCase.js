(function()
{
  var output, TestCase, $Results, hRed, hGreen;
  hRed = "#c00";
  hGreen = "#0c0";
  $Results = $( "#results" );
  output = function( text, color )
  {
    var listItem = $("<li>" + text + "</li>");
    listItem.css( "color", color );
    $Results.append( listItem );
  };

  TestCase = function( name, tests )
  {
    var color, successful, testCount, test, hasSetup, hasTeardown;
    window.assertionsCount = 0;
    successful = 0;
    testCount = 0;
    hasSetup = typeof tests.setup === 'function';
    hasTeardown = typeof tests.teardown === 'function';

    for( test in tests )
    {
      if (!/^test/.test(test)) {
        continue;
      }
      testCount++;
      try{
        if ( hasSetup )
        {
          tests.setup();
        }
        tests[ test ]();
        if ( hasTeardown )
        {
          tests.teardown();
        }
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
}());
