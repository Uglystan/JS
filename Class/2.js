class Personn {
	constructor(firstName, lastName, age) {
		this.firstName = firstName
		this.lastName = lastName
		this.age = age
	}

	greet() {
		console.log(`Je suis ${this.firstName} et j'ai ${this.age} ans`)
	}
}

class Employee extends Personn {
	constructor(firstName, lastName, age, jobTitle) {
		super(firstName, lastName, age)
		this.jobTitle = jobTitle
	}

	greet() {
		super.greet()
		console.log(`Je suis ${this.jobTitle}`)
	}
}

let fireman = new Employee("Lucas", "Lucas", 333, "Fireman")
fireman.greet()