xdescribe("animalSound function", () => {
	let animalSound = require('../exercises/animalSound');
	it("should return correct animal sound", () => {
		expect(animalSound("meow")).toBe("cat");
		expect(animalSound("woof")).toBe("dog");
		expect(animalSound("moo")).toBe("cow");
		expect(animalSound("caw caw")).toBe("crow");
	})
	
	it("should return Don't know that sound when sound does not match an animal in function", () => {
		expect(animalSound("alsjd")).toBe("Don't know that sound")
		expect(animalSound("alsdsklgjdgkjx,mnzmn;owiuer123")).toBe("Don't know that sound")
	})
})