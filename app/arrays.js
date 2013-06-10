if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        var result = -1;
        for (var i=0; i < arr.length && result === -1; i++) {
            if (item === arr[i])
                result  = i;
        }
        return result;
    },

    sum : function(arr) {
        return arr.reduce(function(previousValue, currentValue, index){
            return previousValue + currentValue;
        });
    },

    remove : function(arr, item) {
        var result = [];
        arr.forEach(function(el, i, arr1) {
            if (item !== el)
                result.push(el);
        });
        return result;
    },

    removeWithoutCopy : function(arr, item) {
        for (var i = arr.length-1; i >= 0; i--) {
            if (item === arr[i])
                arr.splice(i, 1);
        }
        return arr;
    },

    append : function(arr, item) {
        arr[arr.length] = item;
        return arr;
    },

    truncate : function(arr) {
        arr.splice(-1, 1);
        return arr;
    },

    concat : function(arr1, arr2) {
        var arr = arr1.slice(0);
        arr2.forEach(function(el, i) {
            arr.push(el);
        });
        return arr;
    },

    insert : function(arr, item, index) {
        var arr2 = arr.splice(index, arr.length-index, item);
        arr = arr.concat(arr2);
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        arr.forEach(function(el, i) {
            if(el === item)
                count ++;
        });
        return count;
    },

    duplicates : function(arr) {
        var duplicateAdded = false;
        var sortedArr = arr.sort();
        var results = [];
        for (var i = 0; i < arr.length - 1; i++) {
            if (sortedArr[i + 1] === sortedArr[i]) {
                if (!duplicateAdded) {
                    duplicateAdded = true;
                    results.push(sortedArr[i]);
                }
            }
            else
                duplicateAdded = false;
        }
        return results;
    },

    square : function(arr) {
        return arr.map(function(value) {
            return value * value;
        });
    },

    findAllOccurrences : function(arr, target) {
        var result = [];
        arr.forEach(function(el, i) {
            if(el === target)
                result.push(i);
        });
        return result;
    }
  };
});
