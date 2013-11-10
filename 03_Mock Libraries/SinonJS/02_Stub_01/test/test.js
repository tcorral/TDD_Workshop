TestCase( 'Stub usage SUM method', {
  setUp: function()
  {
    this.oCalculator = {
      sum: sinon.stub()
    };
    this.$Results = $( "body" );
    this.oCalculatorUI = new CalculatorUI( this.oCalculator, this.$Results );
  },
  tearDown: function()
  {
    delete this.oCalculator;
    delete this.oCalculatorUI;
    delete this.$Results;
  },
  'test should check that CalculatorUI.draw method is called once when sum method is called': function ()
  {
    this.oCalculator.sum.returns( 5 );

    this.oCalculatorUI.sum( 3, 2 );

    assertEquals( 1, this.oCalculator.sum.callCount );
    assertEquals( 5, this.$Results.html() );
  }
} );