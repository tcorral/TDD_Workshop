TestCase( 'Sinon FakeTimers', {
  setUp: function () {
    this.oDOM = new DOM();
    this.oClock = sinon.useFakeTimers();
  },

  tearDown: function () {
    this.oClock.restore();
    delete this.oDOM;
    delete this.oClock;
  },

  "test should animate element over 500ms" : function(){
    var $el = this.oDOM.slide();

    this.oClock.tick( 500 );

    assertEquals( "200px", $el.css("height") );
    assertEquals( "200px", $el.css("width") );
  }
});