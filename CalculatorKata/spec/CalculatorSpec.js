describe('Calculator', function () {
  var oCalculator;
  beforeEach(function (){
    oCalculator = new Calculator();
  });
  afterEach(function () {
    oCalculator = null;
  });
  describe('Substract', function () {
    it('should substract at least two numbers - 2 numbers', function () {
      expect(oCalculator.substract(4, 2)).toEqual(2);
    });
    it('should substract should fail if it receives less than two numbers', function () {
      expect(function () {
        oCalculator.substract(4);
      }).toThrow();
      expect(function () {
        oCalculator.substract();
      }).toThrow();
    });
    it('should substract 3 numbers (5 - 1 - 2 = 2)', function () {
      expect(oCalculator.substract(5,1,2)).toEqual(2);
    });
    it('should substract 4 numbers (5 - 1 - 2 - 1 = 1)', function () {
      expect(oCalculator.substract(5,1,2,1)).toEqual(1);
    });
  });
  describe('Sum', function () {
    it('should sum at least two numbers - 2 numbers', function () {
      expect(oCalculator.sum(4, 2)).toEqual(6);
    });
    it('should sum should fail if it receives less than two numbers', function () {
      expect(function () {
        oCalculator.sum(4);
      }).toThrow();
      expect(function () {
        oCalculator.sum();
      }).toThrow();
    });
    it('should sum 3 numbers (5 + 1 + 2 = 8)', function () {
      expect(oCalculator.sum(5,1,2)).toEqual(8);
    });
  });
});