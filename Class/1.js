class Person {
	constructor (firstName, lastName, age) {
		this.firstName = firstName
		this.lastName = lastName
		this.age = age
	}

	greet() {
		console.log(`Je suis ${this.firstName} et j'ai ${this.age} ans`)
	}
}

let user = new Person('Lucas', 'Lucas', 25)
user.greet()