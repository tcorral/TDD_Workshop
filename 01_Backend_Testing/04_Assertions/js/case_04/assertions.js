(function ()
{
  'use strict';
  var assert, assertTrue, assertFalse, assertObject;
  window.assertionsCount = 0;
  assert = function ( message, expected, retrieved ) {
    if ( !(expected === retrieved) ) {
      throw new Error( message );
    }
    window.assertionsCount++;
    return true;
  };
  assertTrue = function ( message, expected, retrieved )
  {
    return assert( message, expected, retrieved );
  };
  assertFalse = function ( message, expected, retrieved )
  {
    if ( !(expected !== retrieved) ) {
      throw new Error( message );
    }
    window.assertionsCount++;
    return true;
  };
  assertObject = function( message, obj )
  {
    if( !(Object.prototype.toString.call(obj) === '[object Object]') )
    {
      throw new Error( message );
    }
    window.assertionsCount++;
    return true;
  };
  /**
   * Add more assertions
   */

  window.assert = assert;
  window.assertTrue = assertTrue;
  window.assertFalse = assertFalse;
  window.assertObject = assertObject;
}());