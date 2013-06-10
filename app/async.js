if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      var deferred = $.Deferred();
      setTimeout(function() {
          deferred.resolve(value);
        }, 500);
      return deferred.promise();
    },

    manipulateRemoteData : function(url) {
        // var defer = $.Deferred();
        // var filtered = defer.then(function( result ) {
        //   var res = [];
        //   res = result['people'].map(function(el){return el['name'];}).sort();
        //   console.log(res);
        //   return res;
        // });
        // defer.resolve( 5 );
      var res = $.get(url);
      res = res.pipe(function(results) {
        var processedData = [];
        processedData = results['people'].map(function(el){return el['name'];}).sort();
        return processedData;
      });
      return res.promise();
    }
  };
});
