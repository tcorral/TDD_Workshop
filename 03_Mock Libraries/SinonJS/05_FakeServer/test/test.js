TestCase( 'Sinon FakeServer', {
  setUp: function () {
    this.oXhr = sinon.useFakeXMLHttpRequest();
    var aRequests = this.aRequests = [];
    this.oController = new CommentsController();

    this.oXhr.onCreate = function (xhr) {
      aRequests.push(xhr);
    };
  },

  tearDown: function () {
    this.oXhr.restore();
    delete this.oXhr;
    delete this.aRequests;
    delete this.oController;
  },

  "test should fetch comments from server" : function () {
    var callback = sinon.spy();

    this.oController.getCommentsFor( "/some/article", callback );

    assertEquals( 1, this.aRequests.length );

    this.aRequests[0].respond( 200, { "Content-Type": "application/json" },
      '[{ "id": 12, "comment": "Hey there" }]' );

    assert( callback.calledWith( null, [ { id: 12, comment: "Hey there" }] ) );
  },
  "test should fetch comments from server" : function () {
    var callback = sinon.spy();
    var html = '<html><head></head><body></body></html>';
    this.oController.getCommentsFor( "/some/article", callback );

    assertEquals( 1, this.aRequests.length );

    this.aRequests[0].respond( 404, { "Content-Type": "text/html" },
      html );

    assert( callback.calledWith( null, null ));
  }
});