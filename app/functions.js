if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        var fn = function(str2) {
            return str + ', ' + str2;
        };
        return fn;
    },

    makeClosures : function(arr, fn) {
        var results = [];
        arr.forEach(function(el, i) {
            results.push(function(){return fn(el);});
        });
        return results;
    },

    partial : function(fn, str1, str2) {
        return function(str3){
            return fn(str1, str2, str3);
        };
    },

    useArguments : function() {
        var add = 0;
        for(var i=0; i<arguments.length; i++) {
           add += arguments[i];
        }
        return add;
    },

    callIt : function(fn) {
        var argumentsArray = Array.prototype.slice.call(arguments, 1);
        return fn.apply(this, argumentsArray);
    },

    partialUsingArguments : function(fn) {
        var args = Array.prototype.slice.call(arguments).splice(1);
        return function() {
            var allArguments = args.concat(Array.prototype.slice.call(arguments));
            return fn.apply(this, allArguments);
        };
    },

    curryIt : function(fn) {
        var curry = function(a){
            var argsInt =  Array.prototype.slice.call(arguments,0);
            var ncurry = function(b){
                argsInt = argsInt.concat(Array.prototype.slice.call(arguments,0));
                if(argsInt.length < fn.length){
                    return ncurry;
                }
                else{
                    return fn.apply(null, argsInt);
                }
            };
            return ncurry;
        };
        return curry;
    }
  };
});
