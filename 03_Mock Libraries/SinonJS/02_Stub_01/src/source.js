(function()
{
  var CalculatorUI = function( oCalculator, $Results )
  {
    this.oCalculator = oCalculator;
    this.$Results = $Results;
  };
  CalculatorUI.prototype = {
    sum: function( a, b )
    {
      var nResult = this.oCalculator.sum( a, b );
      this._draw( nResult );
      return nResult;
    },
    substract: function( a, b )
    {
      var nResult = this.oCalculator.substract( a, b );
      this._draw( nResult );
      return nResult;
    },
    _draw: function ( nValue )
    {
      this.$Results.html( nValue );
    }
  };
  window.CalculatorUI = CalculatorUI;
}());
