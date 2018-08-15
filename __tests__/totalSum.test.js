describe('totalSum function', () => {
	let totalSum = require('../exercises/totalSum');
	it('should sum the correct number of values', () => {
		expect(totalSum(1,2,3)).toBe(6);
	})
	it('should output 0 if no arguments were passed to the function execution', () => {
		expect(totalSum()).toBe(0);
	})
})