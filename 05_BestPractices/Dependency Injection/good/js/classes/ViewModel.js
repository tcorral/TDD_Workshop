var ViewModel = function ( server )
{
  this.server = server;
};
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
    this.server.findBooksByCategory( category, function( booksInCategory )
    {
      self.insertBooks( booksInCategory );
    });
  }
};