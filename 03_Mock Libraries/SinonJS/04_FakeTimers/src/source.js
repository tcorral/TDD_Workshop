var DOM = function()
{

};
DOM.prototype = {
  addContent: function( sHTML )
  {
    $( "body").append( sHTML );
  },
  removeContent: function()
  {
    $( "body").html("");
  },
  slide: function ()
  {
    var $el = $( "<div></div>" );
    $el.appendTo( "body" );

    $el.animate( { height: "200px", width: "200px" } );
    return $el;
  }
};