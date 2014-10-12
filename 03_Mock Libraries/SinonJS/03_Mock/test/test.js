TestCase( 'Mock usage', {
  setUp: function()
  {
    this.oDOM = new DOM();
    this.oMock = sinon.mock( jQuery.fn );
  },
  tearDown: function()
  {
    this.oMock.restore();
    delete this.oDOM;
  },
  'test should check that jQuery.fn.append is being executed': function ()
  {
    this.oMock.expects( "append" ).once();

    this.oDOM.addContent('<div id="test_layer"></div>');

    this.oMock.verify();
    assertEquals( 1, $("#test_layer").length );
  },
  'test should check that jQuery.fn.remove is being executed': function ()
  {
    this.oMock.expects( "html" ).once();

    this.oDOM.removeContent();

    this.oMock.verify();
    assertEquals( 0, $("#test_layer").length );
  }
} );