var DOM = function()
{

};
DOM.prototype = {
  addContent: function( sHTML )
  {
    $( "body").append( sHTML );
  }
};