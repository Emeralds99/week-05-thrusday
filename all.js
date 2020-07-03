let arr = [true, false, false, false, true]

function all(arr) {
	// Loop through every item in the array
	// If the item evaluates to false, return false
	for (i = 0; i <= arr.length; i++) {
		if (arr[i] == false) {
			return false
		}
	}
	return true	
		
	};



	// If the loop ends, return true
console.log(all(arr))