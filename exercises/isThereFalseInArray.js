function isThereFalseInArray(arr) {
	for(let i = 0; i < arr.length; i++) {
		if(Boolean(arr[i]) === false) {
			return true;
		}
	}
	return false;
}

module.exports = isThereFalseInArray;