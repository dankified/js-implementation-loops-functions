let person = require('../exercises/person');

describe('person function', () => {
	it('should create an object', () => {
		expect(Object.keys(person("x", 2, true)).length).toBe(3);
	})
	it('should assign the correct default values', () => {
		let firstPerson = person();
		expect(firstPerson.name).toBe('student');
		expect(firstPerson.age).toBe(0);
		expect(firstPerson.alive).toBe(true);
	})
})