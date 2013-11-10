TestCase( 'Stub usage', {
  setUp: function()
  {
    this.oDOM = new DOM();
    sinon.stub( jQuery.fn, "append" );
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
    assertEquals( 0, $("#test_layer").length );
  }
} );