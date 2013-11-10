TestCase( 'Stub usage Test Anonimous function', {
  setUp: function()
  {
    this.oButton = new Button();
    sinon.stub( jQuery.fn, 'click' );
    this.oStub = sinon.stub();
    this.oButton.setCallback( this.oStub );
  },
  tearDown: function()
  {
    jQuery.fn.click.restore();
    delete this.oButton;
    delete this.oStub;
  },
  'test should execute the event callback': function ()
  {
    jQuery.fn.click.yields();

    this.oButton.addBehaviour();

    assertEquals( 1, jQuery.fn.click.callCount );
    assertEquals( 1, this.oStub.callCount );
  }
} );