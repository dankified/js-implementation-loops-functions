function animalSound(animal) {
	switch(animal) {
		case "moo": 
			return "cow";
		case "meow":
			return "cat";
		default: 
			return "I don't know that animal"
	}
}

module.exports = animalSound;