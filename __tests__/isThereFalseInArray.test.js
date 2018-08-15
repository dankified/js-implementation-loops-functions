describe("isThereFalseInArray function", () => {
	let isThereFalseInArray = require('../exercises/isThereFalseInArray');
	it("should return true", () => {
		expect(isThereFalseInArray([1,2,5,undefined,true])).toBe(true);
		expect(isThereFalseInArray([null,2,5,undefined,true])).toBe(true);
		expect(isThereFalseInArray([""])).toBe(true);
	})
	it("should return false", () => {
		expect(isThereFalseInArray([])).toBe(false);
		expect(isThereFalseInArray([2,3,4,5,6])).toBe(false);
	})
})
