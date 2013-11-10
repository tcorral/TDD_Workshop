function assert( message, expr ) {
  if ( !expr ) {
    throw new Error( message );
  }
  assert.count++;
  return true;
}
assert.count = 0;

