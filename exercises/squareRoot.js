function squareRoot(number) {
	if(typeof number !== 'number') {
		return null
	}
	
	return Math.sqrt(number);
}

module.exports = squareRoot;