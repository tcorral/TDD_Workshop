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
  var flag, value;
  it("should support async execution of test preparation and expectations", function () {

    runs(function() {
      flag = false;
      value = 0;

      setTimeout(function() {
        flag = true;
      }, 500);
    });

    waitsFor(function() {
      value++;
      return flag;
    }, "The Value should be incremented", 750);

    runs(function() {
      expect(value).toBeGreaterThan(0);
    });
  });
});