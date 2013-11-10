TestCase( 'Stub usage Ajax', {
  setUp: function()
  {
    this.oController = new CommentsController();
    sinon.stub( $, "ajax" );
  },
  tearDown: function()
  {
    $.ajax.restore();
    delete this.oController;
  },
  'test should check that success calls the correct callback with the correct values': function ()
  {
    var oCall,
        fpCallback = sinon.stub(),
        aArgs = [{ title: 'Comment1' }, { title: 'Comment2' }];

    $.ajax.yieldsTo( "success", aArgs );

    this.oController.getCommentsFor( "/some/article", fpCallback );

    oCall = fpCallback.getCall( 0 );

    assertNull( oCall.args[0] );
    assertSame( aArgs, oCall.args[1] );
  }
} );