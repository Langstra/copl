insertJudgeRestrictions = function(obj, funcs)
{
  for (funcKey in funcs)
  {
    var orig = obj[funcs[funcKey]];
    //console.log(orig.toString());
    obj[funcs[funcKey]] = function() {
      if (getId() == "Judge")
      {
        throw "No access allowed";
      }
      var result = orig.apply(this, arguments);
      return result;
    }
  }
}

insertPublicCrowdRestrictions = function(obj, funcs)
{
  for (funcKey in funcs)
  {
    var orig = obj[funcs[funcKey]];
    obj[funcs[funcKey]] = function() {
      if (getId() == "PublicCrowd")
      {
        throw "No access allowed";
      }
      var result = orig.apply(this, arguments);
      // orig wordt steeds overschreven dus hij voert uiteindelijk alleen de laatst aangepaste functie uit. Iets met eval en function.toString() doen denk ik
      return result;
    }
  }
}

getId = function()
{
  var stack = ErrorStackParser.parse(new Error());
  var id = stack[(stack.length)-3].functionName;
  return id.substring(0,id.indexOf("."));
}
