describe( 'Appends a div', function()
{
  var $Body, $Fixture;
  beforeEach(function()
  {
    $Body = $("body");
    $Fixture = $("<div id='fixture_test'></div>");
    $Body.append($Fixture);
  });
  afterEach(function()
  {
    $Fixture.remove();
  });
  it( 'should have added a div successfully', function()
  {
    $Fixture.append( $("<div>hello</div>") );
    expect( $( "div", $Fixture ).length ).toEqual( 1 );
  });
});
describe( 'Appends a span', function()
{
  var $Body, $Fixture;
  beforeEach(function()
  {
    $Body = $( "body" );
    $Fixture = $( "<div id='fixture_test'></div>" );
    $Body.append($Fixture);
  });
  afterEach(function()
  {
    $Fixture.remove();
  });
  it( 'should have added a span successfully', function()
  {
    $Fixture.append( $( "<span>hello</span>" ) );
    expect( $( "span", $Fixture ).length ).toEqual( 1 );
  });
});
