(function (window) {

  window.aspect = function(obj, func, addition) {
    var orig = obj[func];

    obj[func] = function () {
      var directParams = Array.prototype.slice.call(arguments);
      var result;
      var additionResult = addition.apply(this, [function () {
        var params = Array.prototype.slice.call(arguments);

        if (params.length === 0) {
          params = directParams;
        }

        result = orig.apply((this === window ) ? obj : this, params);
      }, directParams]);
      return additionResult || result;
    };

    return function () {
      obj[func] = orig;
    };
  };
}(window));
