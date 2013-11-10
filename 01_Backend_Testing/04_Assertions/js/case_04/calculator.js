(function()
{
  'use strict';
  function _checkInvalidNumbers( a, b )
  {
    if(!a && !b)
    {
      return true;
    }
    return false;
  }
  function _changeStringToZero( str )
  {
    return typeof str === 'string' ? 0 : str;
  }
  function _checkTwoNumbers( numA, numB )
  {
    var obj = {};
    obj.a = _changeStringToZero( numA );
    obj.b = _changeStringToZero( numB );
    return obj;
  }

  var Calculator = function()
  {
  };
  Calculator.prototype = {
    sum: function ( a, b )
    {
      var obj;
      if( _checkInvalidNumbers(a, b) )
      {
        return 0;
      }
      obj = _checkTwoNumbers( a, b );
      return obj.a + obj.b;
    },
    substract: function( a, b)
    {
      var obj;
      if( _checkInvalidNumbers(a, b) )
      {
        return 0;
      }
      obj = _checkTwoNumbers( a, b );
      return obj.a - obj.b;
    }
  };
  window.Calculator = Calculator;
}());