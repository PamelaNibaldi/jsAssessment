if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        var n = num.toString(2);
        n = n[n.length - bit];
        return parseInt(n, 10);
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var n = num.toString(2);
         while (n.length < 8)
            n = '0' + n;
        return n;
    },

    multiply: function(a, b) {
        var res = +(a * b).toFixed(8);
        return res;
    }
  };
});

