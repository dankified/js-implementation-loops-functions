let isEven = require('../exercises/isEven');

describe("isEven function", () => {
	it("should return true when argument is even", () => {
		expect(isEven(4)).toBe(true);
		expect(isEven(8)).toBe(true);
		expect(isEven(287128732)).toBe(true)
	})

	it("should return false when argument is odd", () => {
		expect(isEven(3)).toBe(false);
		expect(isEven(5)).toBe(false);
		expect(isEven(2312371)).toBe(false);
	})
})
