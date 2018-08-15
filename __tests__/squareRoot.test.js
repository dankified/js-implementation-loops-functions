let squareRoot = require('../exercises/squareRoot');

describe("squareRoot function", () => {
	it("should return 2 when argument is 4", () => {
		expect(squareRoot(4)).toBe(2);
	})

	it("should return 3 when argument is 9", () => {
		expect(squareRoot(9)).toBe(3);
	})
})
