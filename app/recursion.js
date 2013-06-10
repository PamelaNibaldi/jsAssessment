if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
        var resp = [];
        var getAllFiles = function(resp, dir, found) {
          if (found || dir['dir'] === dirName)
            found = true;
          for (var i=0; i< dir['files'].length; i++) {
            if(typeof dir['files'][i] === 'string') {
              if (found)
                resp.push(dir['files'][i]);
            }
            else
              getAllFiles(resp, dir['files'][i], found);
          }
        };
      var isFound = dirName ? false : true;
      getAllFiles(resp, data, isFound);
      return resp;
    },

    permute: function(arr) {
      var permArr = [];
      var usedChars = [];
      function permute(input) {
          var i;
          var ch;
          for (i = 0; i < input.length; i++) {
              ch = input.splice(i, 1)[0];
              usedChars.push(ch);
              if (input.length === 0) {
                  permArr.push(usedChars.slice());
              }
              permute(input);
              input.splice(i, 0, ch);
              usedChars.pop();
          }
          return permArr;
      }
      return permute(arr).sort();
    }
  };
});
