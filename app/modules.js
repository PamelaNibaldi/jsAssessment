if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
      return (function () {
        return {
          name : str2,
          greeting : str1,
          sayIt: function () {
            return this.greeting + ', ' + this.name;
          }
        };
      })(str1, str2);
    }
  };
});

