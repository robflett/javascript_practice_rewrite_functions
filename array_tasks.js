var arrayTasks = {

	concat: function (arr1, arr2) {
		for (var i=0; i < arr2.length; i++) {
			arr1.push( arr2[i]);
		}
		return arr1;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		new_array = []
		for (var i=1; i < arr.length+1; i++) {
			var n = i * i;
			new_array.push(n);
		}
		return new_array;
	},

	sum: function (arr) {
		var total = 0;
		    for (var object of arr) {
		      total = (total + object)
		    }
		    return total;
	},

	findDuplicates: function (arr) {
		new_array = []

		return arr.reduce(function(new_array, val, i) {
		    if (arr.indexOf(val) !== i && new_array.indexOf(val) === -1) {
		      new_array.push(val);
		    }
		    return new_array;
		  }, []);
	},

	removeAndClone: function (arr, valueToRemove) {
	var filteredArray = [];
	    for (var object of arr) {
	      if (object != valueToRemove) {
	        filteredArray.push(object);
	      }
	    }
	    return filteredArray;
	},

	findIndexesOf: function (arr, itemToFind) {
		new_array = []
		// for (var i=1; i < arr.length; i++) {
		// 	if (i === itemToFind){
		// 		new_array.push(i)
		// 	}
		// }
		arr.forEach(function(item, index){
			if (item === itemToFind) new_array.push(index);
		})
		return new_array;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var sum = 0;
		sum = arr.reduce(function(acc, element){
			return element % 2 === 0 ? acc + (element * element) : acc
		}, 0)
		
	}

}

module.exports = arrayTasks
