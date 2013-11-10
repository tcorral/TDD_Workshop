(function()
{
  'use strict';
  var Calculator = {
    sum: function ( a, b )
    {
      if(!a && !b)
      {
        return 0;
      }
      return a + b;
    },
    substract: function( a, b )
    {
      if(!a && !b)
      {
        return 0;
      }
      return a - b;
    }
  };
  window.Calculator = Calculator;
}());