describe( 'Calculator Spec', function()
{
  var oCalculator;
  beforeEach(function()
  {
    oCalculator = new Calculator();
  });
  afterEach(function()
  {
    oCalculator = null;
  });

  describe('Sum method specs', function()
  {
    it("should check that sum method returns 10 if we sum 5 and 5", function()
    {
      expect( 10 ).toEqual( oCalculator.sum( 5, 5 ) );
    });
    it("should check that sum method does not returns 10 if we sum 5 and 2", function()
    {
      expect( 10).not.toEqual( oCalculator.sum( 5, 2) );
    });
    it("should check that sum method returns 0 if we don't sum anything", function()
    {
      expect( 0 ).toEqual( oCalculator.sum() );
    });
  });

  describe('Substract method specs', function()
  {
    it("should check that substract method returns 5 if we substract 5 from 10", function()
    {
      expect( 5 ).toEqual( oCalculator.substract( 10, 5 ) );
    });
    it("should check that substract method returns 0 if we don't substract anything", function()
    {
      expect( 0 ).toEqual( oCalculator.substract() );
    });
  });
});