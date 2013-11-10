/**
 * ViewModel está mezclando dos responsabilidades diferentes, representar la información
 * de una forma adecuada a la vista y descargar la información de un servidor.
 */
var ViewModel = function () {};
ViewModel.prototype = {
  insertBooks: function( aBooks )
  {
    var nIndex = 0,
      nLenBooks = aBooks.length,
      oBook;
    for(; nIndex < nLenBooks; nIndex++ )
    {
      oBook = aBooks[nIndex];
      $( "#books_list" ).append( '<li>Title: ' + oBook.title +
        ', Author: ' + oBook.author + '</li>')
    }
  },
  loadByCategory: function( category )
  {
    var self = this;
    $.ajax({
      url: '/api/category/',
      type: 'POST',
      dataType: 'json',
      data: JSON.stringify( { category: category } ),
      contentType: 'application/json; charset=utf-8',
      success: function( booksInThisCategory )
      {
        self.insertBooks( booksInThisCategory );
      }
    });
  }
};