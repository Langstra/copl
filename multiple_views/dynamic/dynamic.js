insertRestrictions = function(obj, funcs, addition)
{
  for (funcKey in funcs)
  {
    var orig = obj[funcs[funcKey]];
    obj[funcs[funcKey]] = function() {
      addition();
      var result = orig.apply(this, arguments);
      return result;
    }
  }
}

getId = function()
{
  var stack = ErrorStackParser.parse(new Error());
  var id = stack[3].functionName;
  return id.substring(0,id.indexOf("."));
}
