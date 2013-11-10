TestCase( 'Spy usage', {
  setUp: function()
  {
    this.oDOM = new DOM();
    sinon.spy( jQuery.fn , 'append' );
  },
  tearDown: function()
  {
    jQuery.fn.append.restore();
    delete this.oDOM;
  },
  'test should check that jQuery.fn.append is being executed': function ()
  {
    this.oDOM.addContent('<div id="test_layer"></div>');

    assertEquals( 1, jQuery.fn.append.callCount );
    assertEquals( 1, $("#test_layer").length );
  }
} );