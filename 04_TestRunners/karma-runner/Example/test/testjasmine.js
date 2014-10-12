describe('Spy usage', function () {
  var oDom;
  beforeEach(function () {
    oDom = new DOM();
    sinon.spy(jQuery.fn, 'append');
  });
  afterEach(function () {
    jQuery.fn.append.restore();
    oDom = null;
  });
  it('should check that jQuery.fn.append is being executed', function () {
    oDom.addContent('<div id="test_layer"></div>');
    expect(1).toEqual(jQuery.fn.append.callCount);
    expect(1).toEqual($('#test_layer').length);
  });
});