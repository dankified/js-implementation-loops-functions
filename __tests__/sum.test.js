let sum = require('../exercises/sum');

describe("sum function", () => {
  it("should return 4 when arguments are 2 and 2", () => {
    expect(sum(2, 2)).toBe(4);
  });
  it("should return 0 when arguments are 4 and -4", () => {
    expect(sum(4, -4)).toBe(0);
  });
  it("should return 16 when arguments are 10 and 6", () => {
    expect(sum(10, 6)).toBe(16);
	});
});