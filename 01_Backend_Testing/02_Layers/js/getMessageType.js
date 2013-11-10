function getMessageType( )
{
  var aMessageType = ["debug", "warn", "info", "error"];
  return aMessageType[ Math.floor( Math.random() * aMessageType.length )];
}