var Server = function () {};
Server.prototype = {
  findBooksByCategory: function( category, success ) {
    $.ajax({
      url: '/api/category/',
      type: 'POST',
      dataType: 'json',
      data: JSON.stringify( { category: category } ),
      contentType: 'application/json; charset=utf-8',
      success: success
    });
  }
};
