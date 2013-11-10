var Button = function()
{
  this.fpCallback = function(){};
};
Button.prototype = {
  setCallback: function( fpCallback )
  {
    this.fpCallback = fpCallback;
  },
  addBehaviour: function()
  {
    var self = this;
    $("button").click(function(eEvent)
    {
      self.fpCallback(eEvent);
    });
  }
};