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

	// findDuplicates: function (arr) {
		
	// },

	// removeAndClone: function (arr, valueToRemove) {
		
	// },

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
