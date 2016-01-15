insert = function(obj, func, addition) {
  var orig = obj[func];
  return function() {
    addition();
    var result = orig.apply(this, arguments);
    return result;
  }
}
