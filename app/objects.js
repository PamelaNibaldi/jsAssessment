if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      var binded = fn.bind(obj);
      return binded();
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
      return constructor;
    },

    iterate : function(obj) {
      var ownProperties = [];
      for(var p in obj) {
        if (obj.hasOwnProperty(p))
          ownProperties.push(p + ': ' + obj[p]);
      }
      return ownProperties;
    }
  };
});
