//test( "Async test", function() {
//  expect(1);
//  setTimeout(function(){
//    ok(true, 'Test has been executed');
//  }, 1000);
//});
asyncTest( "Async test", function() { //This type of testing makes your tests becomes slow when running.
  expect(1);
  setTimeout(function(){
    ok(true, 'Test has been executed');
    start();
  }, 1000);
});