describe( 'Appends a div', function()
{
  it( 'should have added a div successfully', function()
  {
    var $Body = $( "body" );
    $Body.append( $( "<div>hello</div>" ) );
    expect( $( "div", $Body ).length ).toEqual( 1 );
  });
});
describe( 'Appends a span', function()
{
  it( 'should have added a span successfully', function()
  {
    var $Body = $( "body" );
    $Body.append( $( "<span>hello</span>" ) );
    expect( $( "span", $Body ).length ).toEqual( 1 );
  });
});
