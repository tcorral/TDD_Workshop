var Calculator = function () {};
Calculator.prototype = {
  _copyArgumentsToArray: function (args, offset) {
    return Array.prototype.splice.call(args, offset);
  },
  _checkArguments: function (args, expectedLength){
    if(args.length < expectedLength){
      throw new Error('Invalid arguments');
    }
  },
  substract: function (operatorA, operatorB){
    var firstOperator = operatorA;
    var restOperators = this._copyArgumentsToArray(arguments, 1);
    var toSubstract = 0;

    this._checkArguments(restOperators, 1);

    toSubstract = restOperators.reduce(function (prev, next) {
      return prev + next;
    });

    return firstOperator - toSubstract;
  },
  sum: function (operatorA, operatorB) {
    var args = this._copyArgumentsToArray(arguments, 0);
    this._checkArguments(args, 2);
    return args.reduce(function (prev, next){
      return prev + next;
    });
  }
};