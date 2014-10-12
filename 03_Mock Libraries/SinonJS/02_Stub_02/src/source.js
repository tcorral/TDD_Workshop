(function()
{
  var CommentsController = function ()
  {

  };
  CommentsController.prototype = {
    getCommentsFor: function ( sUrl, fpCallback )
    {
      $.ajax({
        url: sUrl,
        type: 'GET',
        dataType: 'json',
        success: function( oData )
        {
          fpCallback( null, oData );
        },
        error: function( jqXHR, sTextStatus, erErrorThrown )
        {
          console.log(erErrorThrown);
          fpCallback( erErrorThrown, null );
        }
      });
    }
  };
  window.CommentsController = CommentsController;
}());