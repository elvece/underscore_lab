var _ = {
    average: function(array){
        var sum = 0;
        for (var i = 0; i < array.length; i++){
           sum += array[i];
        }
        return sum / array.length;
    },

    contains: function(array, value){
      return array.indexOf(value) > -1;
    },

    first: function(array){
      return array[0];
    },

    last: function(array){
      return [array.length-1];
    },

    shuffle: function (array){
      var copyArray = [];
      var arrayLength = array.length;
      for (var i = 0; i < arrayLength; i++){
        var random = Math.floor(Math.random() * array.length);
        copyArray[i] = array.splice(random, 1)[0];
      }
      return copyArray;
    },

    sample: function(array){
      return Math.floor(Math.random() * array.length);
    }
};
