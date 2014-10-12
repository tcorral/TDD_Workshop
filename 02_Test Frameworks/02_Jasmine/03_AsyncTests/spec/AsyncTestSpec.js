//describe( 'Async Test false positive', function(){
//  it("should simulate an asynchronous call", function () {
//    var flag = false;
//    var value = 0;
//
//    setTimeout(function() {
//      value++;
//      //keep returning false…
//      flag = false;
//      expect(value).toEqual(10);
//    }, 5000);
//  });
//});
describe( 'Async Test', function(){
  it("should support async execution of test preparation and expectations", function (done) {
    var value = 0;

    setTimeout(function() {
      value++;
      done();
    }, 500);

    expect(value).toBeGreaterThan(0);
  });
});